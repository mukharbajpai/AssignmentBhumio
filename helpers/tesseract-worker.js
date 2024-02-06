const { createWorker } = require("tesseract.js");

const initializeWorker = async () => {
  try {
    const worker = await createWorker("eng");
    return worker;
  } catch (error) {
    console.error("Error initializing OCR worker:", error.message);
    throw error;
  }
};

module.exports = { initializeWorker };
