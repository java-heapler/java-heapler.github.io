import { useState, useEffect, useCallback } from 'react';

/**
 * Custom storage hook that handles multiple storage mechanisms
 * with sophisticated fallbacks and error handling
 * 
 * @param {string} key - The storage key
 * @param {any} initialValue - The initial value
 * @param {object} options - Storage options
 * @param {string} options.strategy - Storage strategy ('local', 'session', 'indexeddb', 'auto')
 * @param {number} options.expiry - Expiry time in milliseconds
 * @returns {Array} - [storedValue, setValue, removeValue, storageStatus]
 */
export default function useStorage(key, initialValue, options = {}) {
  const {
    strategy = 'auto', // 'local', 'session', 'indexeddb', 'auto'
    expiry = null,     // null means no expiry
  } = options;

  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from storage based on strategy
      return getValueFromStorage(key, initialValue, strategy);
    } catch (error) {
      console.error(`Error retrieving stored value for key "${key}":`, error);
      return initialValue;
    }
  });

  // Storage status for tracking errors, loading, etc.
  const [storageStatus, setStorageStatus] = useState({
    loading: false,
    error: null,
    supported: isStorageSupported(strategy)
  });

  // Helper to determine which storage mechanism to use
  function determineStorageStrategy() {
    if (strategy !== 'auto') return strategy;
    
    // Auto-detect best storage strategy
    if (isIndexedDBSupported()) return 'indexeddb';
    if (isLocalStorageSupported()) return 'local';
    if (isSessionStorageSupported()) return 'session';
    
    return 'memory'; // Last resort
  }

  // Helper to check if a storage strategy is supported
  function isStorageSupported(storageType) {
    switch (storageType) {
      case 'local': return isLocalStorageSupported();
      case 'session': return isSessionStorageSupported();
      case 'indexeddb': return isIndexedDBSupported();
      case 'auto': return isLocalStorageSupported() || isSessionStorageSupported() || isIndexedDBSupported();
      default: return false;
    }
  }

  // Check support for localStorage
  function isLocalStorageSupported() {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Check support for sessionStorage
  function isSessionStorageSupported() {
    try {
      const testKey = '__storage_test__';
      sessionStorage.setItem(testKey, testKey);
      sessionStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Check support for IndexedDB
  function isIndexedDBSupported() {
    return typeof window !== 'undefined' && 'indexedDB' in window;
  }

  // Get value from the appropriate storage
  function getValueFromStorage(key, defaultValue, strategy) {
    const actualStrategy = strategy === 'auto' ? determineStorageStrategy() : strategy;
    
    switch (actualStrategy) {
      case 'local':
        return getFromLocalStorage(key, defaultValue);
      case 'session':
        return getFromSessionStorage(key, defaultValue);
      case 'indexeddb':
        // For the initial value, return defaultValue since IndexedDB is async
        // The useEffect below will handle loading from IndexedDB
        return defaultValue; 
      default:
        return defaultValue;
    }
  }

  // Get from localStorage with expiry check
  function getFromLocalStorage(key, defaultValue) {
    if (!isLocalStorageSupported()) return defaultValue;
    
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;
    
    try {
      const parsed = JSON.parse(item);
      
      // Check if item has expired
      if (parsed.expiry && parsed.expiry < Date.now()) {
        localStorage.removeItem(key);
        return defaultValue;
      }
      
      return parsed.value;
    } catch {
      return defaultValue;
    }
  }

  // Get from sessionStorage with expiry check
  function getFromSessionStorage(key, defaultValue) {
    if (!isSessionStorageSupported()) return defaultValue;
    
    const item = sessionStorage.getItem(key);
    if (!item) return defaultValue;
    
    try {
      const parsed = JSON.parse(item);
      
      // Check if item has expired
      if (parsed.expiry && parsed.expiry < Date.now()) {
        sessionStorage.removeItem(key);
        return defaultValue;
      }
      
      return parsed.value;
    } catch {
      return defaultValue;
    }
  }

  // Get from IndexedDB
  function getFromIndexedDB(key) {
    return new Promise((resolve, reject) => {
      if (!isIndexedDBSupported()) {
        reject(new Error('IndexedDB not supported'));
        return;
      }
      
      const request = indexedDB.open('portfolio-storage', 1);
      
      request.onupgradeneeded = function(event) {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('key-value-store')) {
          db.createObjectStore('key-value-store');
        }
      };
      
      request.onerror = function() {
        reject(new Error('Error opening IndexedDB'));
      };
      
      request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(['key-value-store'], 'readonly');
        const store = transaction.objectStore('key-value-store');
        const getRequest = store.get(key);
        
        getRequest.onerror = function() {
          reject(new Error('Error getting from IndexedDB'));
        };
        
        getRequest.onsuccess = function() {
          const result = getRequest.result;
          
          if (!result) {
            resolve(null);
            return;
          }
          
          // Check if item has expired
          if (result.expiry && result.expiry < Date.now()) {
            // Delete the expired item
            const deleteTransaction = db.transaction(['key-value-store'], 'readwrite');
            const deleteStore = deleteTransaction.objectStore('key-value-store');
            deleteStore.delete(key);
            resolve(null);
            return;
          }
          
          resolve(result.value);
        };
      };
    });
  }

  // Load data from IndexedDB when the component mounts
  useEffect(() => {
    if (strategy === 'indexeddb' || strategy === 'auto') {
      setStorageStatus(prev => ({ ...prev, loading: true }));
      
      getFromIndexedDB(key)
        .then(value => {
          if (value !== null) {
            setStoredValue(value);
          }
          setStorageStatus(prev => ({ ...prev, loading: false, error: null }));
        })
        .catch(error => {
          console.error('Error fetching from IndexedDB:', error);
          setStorageStatus(prev => ({ 
            ...prev, 
            loading: false, 
            error: error.message 
          }));
        });
    }
  }, [key, strategy]);

  // Define a function to update the stored value
  const setValue = useCallback((value) => {
    try {
      // If value is a function, pass the current value
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      const actualStrategy = strategy === 'auto' ? determineStorageStrategy() : strategy;
      const expiryTime = expiry ? Date.now() + expiry : null;
      
      // Store in the appropriate storage
      switch (actualStrategy) {
        case 'local':
          if (isLocalStorageSupported()) {
            localStorage.setItem(key, JSON.stringify({
              value: valueToStore,
              expiry: expiryTime
            }));
          }
          break;
        case 'session':
          if (isSessionStorageSupported()) {
            sessionStorage.setItem(key, JSON.stringify({
              value: valueToStore,
              expiry: expiryTime
            }));
          }
          break;
        case 'indexeddb':
          if (isIndexedDBSupported()) {
            const request = indexedDB.open('portfolio-storage', 1);
            
            request.onsuccess = function(event) {
              const db = event.target.result;
              const transaction = db.transaction(['key-value-store'], 'readwrite');
              const store = transaction.objectStore('key-value-store');
              
              store.put({
                value: valueToStore,
                expiry: expiryTime
              }, key);
            };
          }
          break;
        default:
          console.warn(`Storage strategy "${actualStrategy}" not supported`);
      }
    } catch (error) {
      console.error(`Error setting stored value for key "${key}":`, error);
      setStorageStatus(prev => ({ ...prev, error: error.message }));
    }
  }, [key, storedValue, strategy, expiry]);

  // Define a function to remove the stored value
  const removeValue = useCallback(() => {
    try {
      const actualStrategy = strategy === 'auto' ? determineStorageStrategy() : strategy;
      
      switch (actualStrategy) {
        case 'local':
          if (isLocalStorageSupported()) {
            localStorage.removeItem(key);
          }
          break;
        case 'session':
          if (isSessionStorageSupported()) {
            sessionStorage.removeItem(key);
          }
          break;
        case 'indexeddb':
          if (isIndexedDBSupported()) {
            const request = indexedDB.open('portfolio-storage', 1);
            
            request.onsuccess = function(event) {
              const db = event.target.result;
              const transaction = db.transaction(['key-value-store'], 'readwrite');
              const store = transaction.objectStore('key-value-store');
              store.delete(key);
            };
          }
          break;
        default:
          console.warn(`Storage strategy "${actualStrategy}" not supported`);
      }
      
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Error removing stored value for key "${key}":`, error);
      setStorageStatus(prev => ({ ...prev, error: error.message }));
    }
  }, [key, strategy, initialValue]);

  return [storedValue, setValue, removeValue, storageStatus];
} 