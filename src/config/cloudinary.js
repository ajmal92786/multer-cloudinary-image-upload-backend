const { v2 } = require("cloudinary");
const crypto = require("crypto");
require("dotenv").config();

const cloudinary = v2;

const cloudinaryConfig = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};

const generateSignature = (paramsToSign) => {
  const { api_secret } = cloudinary.config();
  const sortedParams = Object.keys(paramsToSign)
    .sort()
    .map((key) => `${key}=${paramsToSign[key]}`)
    .join("&");

  const signature = crypto
    .createHash("sha1")
    .update(sortedParams + api_secret)
    .digest("hex");

  return signature;
};

const uploadToCloudinary = async (filePath) => {
  try {
    cloudinaryConfig(); // Initialize config
    const timestamp = Math.round(new Date().getTime() / 1000);
    const paramsToSign = {
      timestamp,
    };

    const signature = generateSignature(paramsToSign);
    const result = await cloudinary.uploader.upload(filePath, {
      ...paramsToSign,
      signature,
      api_key: process.env.CLOUDINARY_API_KEY,
    });
    return result; // Return the cloudinary upload result (URL, public_id, etc.)
  } catch (error) {
    console.error(error);
  }
};

module.exports = { uploadToCloudinary };
