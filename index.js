// Hello This is a temporary Mock Comment
require("dotenv").config();
const express = require("express");
const multer = require("multer");
const { parseUploadedDocument } = require("./controllers/ocr.controller");

const app = express();
app.use(express.json());

const port = process.env.PORT || 1667;
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), parseUploadedDocument);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
