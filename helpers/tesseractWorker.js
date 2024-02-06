const { createWorker } = require("tesseract.js");

/**
 * Initializes a worker and returns it.
 *
 * @return {Promise<Worker>} The initialized worker
 */
const initializeWorker = async () => {
  try {
    const worker = await createWorker("eng");
    return worker;
  } catch (error) {
    console.error("Error Iitializig Worker...Exiting!", error.message);
    throw new Error("Error Iitializig Worker.");
  }
};

module.exports = { initializeWorker };
