/* 
 * Web Worker for Image Processing
 * This demonstrates how to offload heavy computations to a separate thread
 */

// Set up worker event listener
self.addEventListener('message', event => {
  const { id, imageData, operation } = event.data;
  
  try {
    let result;
    
    switch (operation) {
      case 'grayscale':
        result = convertToGrayscale(imageData);
        break;
      case 'blur':
        result = applyBlur(imageData);
        break;
      case 'invert':
        result = invertColors(imageData);
        break;
      default:
        throw new Error(`Unsupported operation: ${operation}`);
    }
    
    // Return the processed data
    self.postMessage({
      id,
      success: true,
      result
    });
  } catch (error) {
    // Handle errors
    self.postMessage({
      id,
      success: false,
      error: error.message
    });
  }
});

/**
 * Converts an image to grayscale
 * @param {Object} imageData - The image data to process
 * @returns {Object} - The processed image data
 */
function convertToGrayscale(imageData) {
  const { data, width, height } = imageData;
  const result = new Uint8ClampedArray(data.length);
  
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    result[i] = avg;     // R
    result[i + 1] = avg; // G
    result[i + 2] = avg; // B
    result[i + 3] = data[i + 3]; // A (unchanged)
  }
  
  return { data: result, width, height };
}

/**
 * Applies a simple box blur to an image
 * @param {Object} imageData - The image data to process
 * @returns {Object} - The processed image data
 */
function applyBlur(imageData) {
  const { data, width, height } = imageData;
  const result = new Uint8ClampedArray(data.length);
  const kernelSize = 3;
  const halfKernel = Math.floor(kernelSize / 2);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let sumR = 0, sumG = 0, sumB = 0, count = 0;
      
      // Apply kernel
      for (let ky = -halfKernel; ky <= halfKernel; ky++) {
        for (let kx = -halfKernel; kx <= halfKernel; kx++) {
          const px = x + kx;
          const py = y + ky;
          
          if (px >= 0 && px < width && py >= 0 && py < height) {
            const index = (py * width + px) * 4;
            sumR += data[index];
            sumG += data[index + 1];
            sumB += data[index + 2];
            count++;
          }
        }
      }
      
      // Write averaged values
      const index = (y * width + x) * 4;
      result[index] = sumR / count;
      result[index + 1] = sumG / count;
      result[index + 2] = sumB / count;
      result[index + 3] = data[index + 3]; // Alpha unchanged
    }
  }
  
  return { data: result, width, height };
}

/**
 * Inverts the colors of an image
 * @param {Object} imageData - The image data to process
 * @returns {Object} - The processed image data
 */
function invertColors(imageData) {
  const { data, width, height } = imageData;
  const result = new Uint8ClampedArray(data.length);
  
  for (let i = 0; i < data.length; i += 4) {
    result[i] = 255 - data[i];         // R
    result[i + 1] = 255 - data[i + 1]; // G
    result[i + 2] = 255 - data[i + 2]; // B
    result[i + 3] = data[i + 3];       // A (unchanged)
  }
  
  return { data: result, width, height };
} 