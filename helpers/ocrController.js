const ocr = require("./ocrService");

/**
 * Parse the uploaded document, perform OCR on the image, and send the parsed response.
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @return {Promise} a Promise that resolves with the parsed response or rejects with an error
 */
const parseDocument = async (req, res) => {
  if (!req?.file) {
    return res?.status(422).send("Please upload a file alog with POST request!!");
  }
  const uploadRootPath = `uploads/`;
  try {
    const imagePath = uploadRootPath + (req.file ? req.file.filename : '');
    const parsedResponse = await ocr(imagePath);
    return res.status(200).json(parsedResponse);
  } catch (error) {
    console.error("Error in /upload endpoint:", error?.message);
    return res.status(500).send("Something went wrong while processihg the request!!");
  }
};

module.exports = {
  parseDocument,
};
