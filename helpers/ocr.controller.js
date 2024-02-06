const ocr = require("../services/ocr.service");

/**
 * Parse the uploaded document, perform OCR on the image, and send the parsed response.
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @return {Promise} a Promise that resolves with the parsed response or rejects with an error
 */
const parseUploadedDocument = async (req, res) => {
  if (!req.file) {
    return res.status(422).send("Please attach a file to file key");
  }

  try {
    const imagePath = "uploads/" + (req.file ? req.file.filename : '');
    const parsedResponse = await ocr(imagePath);
    return res.status(200).json(parsedResponse);
  } catch (error) {
    console.error("Error in /upload endpoint:", error.message);
    return res.status(500).send("Internal Server Error!!");
  }
};

module.exports = {
  parseUploadedDocument,
};
