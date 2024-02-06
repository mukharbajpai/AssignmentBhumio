const { initializeWorker } = require("./tesseractWorker");
const { getIndices } = require("./getIndices");
/**
 * Asynchronously performs Optical Character Recognition (OCR) on the given image file.
 *
 * @param {string} imagePath - the file path of the image to be processed
 * @return {object} an object containing the recognized questions and the exact parsed text pattern
 */
const ocr = async (imagePath) => {
  let worker;
  try {
    worker = await initializeWorker();
    const responseFromTesseract = await worker.recognize(imagePath);
    const solution = getIndices(responseFromTesseract?.data?.text);
    return {
      solution: solution,
      // exactParsedPattern: responseFromTesseract.data.text,
    };
    
  } catch (error) {
    console.error("Error in OCR processing:", error.message);
    throw new Error("Error in OCR processing. Please make sure tessearct worker got initialised correctly!");
  } finally {
    if (worker) {
      await worker.terminate();
    }
  }
};

module.exports = ocr;
