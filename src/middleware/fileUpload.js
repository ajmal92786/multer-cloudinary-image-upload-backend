const path = require("path");
const multer = require("multer");
const { fileTypeValidator } = require("../utils/fileTypeValidator.js");
const { UNEXPECTED_FILE_TYPE } = require("../constants/file.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Save files in the "uploads" directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique file name using timestamp + original extension
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const isFileTypeAllowed = fileTypeValidator(file);
    if (isFileTypeAllowed) {
      return cb(null, true); // Accept the file
    } else {
      cb(
        new multer.MulterError(
          UNEXPECTED_FILE_TYPE.code,
          UNEXPECTED_FILE_TYPE.message
        )
      ); // Reject the file with custom error
    }
  },
}).array("file", 1); // Accepts one file with field name "file"

module.exports = upload;
