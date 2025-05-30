const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { fileRouter } = require("./src/router/fileRouter.js");
// const { fileURLToPath } = require("url");
const path = require("path");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use(cors());
app.use("/src/uploads", express.static("src/uploads"));

app.use("/files", fileRouter);

app.get("/", (req, res) => {
  res.send("Welcome to file/image upload");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
