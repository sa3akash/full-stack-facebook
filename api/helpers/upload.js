const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NEME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});


module.exports = cloudinaryUpload = async (imgFiles, path) => {
    const photoAlbum = [];
  
    const promises = imgFiles.map((img) => {
      return cloudinary.v2.uploader.upload(img, {
          folder: path,
          resource_type: "image",
        })
        .then((result) => {
          photoAlbum.push({ url: result.secure_url });
        })
        .catch((err) => {
          console.log("*** Error: Cloudinary Upload", err);
        });
    });
  
    await Promise.all(promises);
  
    return photoAlbum;
  };

