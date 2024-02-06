const { initializeWorker } = require("./tesseractWorker");

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
    const ret = await worker.recognize(imagePath);
    const pattern = /\d+\.\s*([^.\[]+)/g;
    const matches = ret.data.text.match(pattern);
    return {
      questions: matches.map((match) => match.trim()),
      exactParsedPattern: ret.data.text,
    };
  } catch (error) {
    console.error("Error in OCR processing:", error.message);
    throw error;
  } finally {
    if (worker) {
      await worker.terminate();
    }
  }
};

module.exports = ocr;
