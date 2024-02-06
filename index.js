const express = require("express");
const multer = require("multer");
const { parseDocument } = require("./helpers/ocrController");

const app = express();
app.use(express.json());

const port = process.env.PORT ? process.env.PORT : 1667;
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), parseDocument);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});