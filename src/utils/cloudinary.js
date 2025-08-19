import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded to Cloudinary:", uploadResult.url);

    // remove the file from local storage after successful upload
    fs.unlinkSync(localFilePath);

    return uploadResult;
  } catch (error) {
    // remove local file if upload failed
    try {
      await fs.promises.unlink(localFilePath);
    } catch {}
    console.error("Cloudinary upload error:", error);
    return null;
  }
};

export default uploadOnCloudinary;
