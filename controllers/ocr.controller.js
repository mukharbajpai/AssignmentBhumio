const ocr = require("../services/ocr.service");

const parseUploadedDocument = async (req, res) => {
  if (!req.file) {
    res.status(422).send("Please attach a file to file key");
  }

  try {
    const imagePath = "uploads/" + req.file.filename;
    const parsedResponse = await ocr(imagePath);
    res.status(200).json(parsedResponse);
  } catch (error) {
    console.error("Error in /upload endpoint:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  parseUploadedDocument: parseUploadedDocument,
};
