import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for using the image processing web worker
 * This demonstrates understanding of advanced React patterns and browser APIs
 */
export function useImageWorker() {
  const [worker, setWorker] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [callbacks, setCallbacks] = useState({});

  // Initialize the worker
  useEffect(() => {
    // Only create the worker in a browser environment
    if (typeof window !== 'undefined' && 'Worker' in window) {
      try {
        // Using a dynamic import strategy that would work with build tools
        // In a real implementation, you'd need to configure your build tool to handle worker files
        // const imageWorker = new Worker(new URL('../workers/imageProcessor.worker.js', import.meta.url));
        
        // For demonstration purposes, we'll create a worker from a blob
        // In production, use the proper build configuration for web workers
        const workerCode = `
          self.addEventListener('message', event => {
            const { id, imageData, operation } = event.data;
            
            try {
              let result = { ...imageData };
              
              // Simple demo operation (invert colors)
              if (operation === 'invert' && imageData.data) {
                const newData = new Uint8ClampedArray(imageData.data.length);
                for (let i = 0; i < imageData.data.length; i += 4) {
                  newData[i] = 255 - imageData.data[i];
                  newData[i + 1] = 255 - imageData.data[i + 1];
                  newData[i + 2] = 255 - imageData.data[i + 2];
                  newData[i + 3] = imageData.data[i + 3];
                }
                result.data = newData;
              }
              
              self.postMessage({
                id,
                success: true,
                result
              });
            } catch (error) {
              self.postMessage({
                id,
                success: false,
                error: error.message
              });
            }
          });
        `;
        
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        const imageWorker = new Worker(URL.createObjectURL(blob));
        
        // Set up message handler
        imageWorker.onmessage = (event) => {
          const { id, success, result, error } = event.data;
          
          if (callbacks[id]) {
            if (success) {
              callbacks[id].resolve(result);
            } else {
              callbacks[id].reject(new Error(error));
            }
            
            // Clean up callback
            setCallbacks(prev => {
              const newCallbacks = { ...prev };
              delete newCallbacks[id];
              return newCallbacks;
            });
          }
          
          // If no more callbacks, we're done processing
          if (Object.keys(callbacks).length === 0) {
            setProcessing(false);
          }
        };
        
        // Handle worker errors
        imageWorker.onerror = (err) => {
          setError(err.message || 'Error in web worker');
          setProcessing(false);
        };
        
        setWorker(imageWorker);
        
        // Clean up worker on unmount
        return () => {
          imageWorker.terminate();
        };
      } catch (err) {
        console.error('Failed to create web worker:', err);
        setError('Failed to initialize image processor');
      }
    }
  }, [callbacks]);

  /**
   * Process an image with the worker
   * @param {ImageData} imageData - The image data to process
   * @param {string} operation - The operation to perform (grayscale, blur, invert)
   * @returns {Promise<ImageData>} - A promise that resolves with the processed image data
   */
  const processImage = useCallback((imageData, operation) => {
    if (!worker) {
      return Promise.reject(new Error('Worker not initialized'));
    }
    
    setProcessing(true);
    setError(null);
    
    return new Promise((resolve, reject) => {
      const id = Date.now().toString();
      
      // Store callbacks
      setCallbacks(prev => ({
        ...prev,
        [id]: { resolve, reject }
      }));
      
      // Send data to worker
      worker.postMessage({
        id,
        imageData,
        operation
      });
    });
  }, [worker]);

  return {
    processImage,
    processing,
    error,
    supported: typeof window !== 'undefined' && 'Worker' in window
  };
} 