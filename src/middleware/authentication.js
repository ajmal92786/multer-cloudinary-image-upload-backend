const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  // This reads the Authorization header like:
  // Authorization: Bearer <JWT_TOKEN>
  // It splits it and extracts only the token part.

  if (!token) {
    return res
      .status(403)
      .json({ message: "No token provided, authorization denied." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);

    return res
      .status(401)
      .json({ message: "Invalid token, authorization denied." });
  }
};

module.exports = authenticateJWT;
