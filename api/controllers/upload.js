const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NEME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

const folder = process.env.CLOUD_FOLDER_NAME;

exports.uploadImages = async (req, res, next) => {
  try {
    let { path, images } = req.body;
    let cloudFolder = folder + "/" + path;
    let urls = await cloudinaryUpload(images, cloudFolder);

    res.status(201).json(urls);
  } catch (err) {
    return next(err);
  }
};



//    let cloudFolder = folder + "/" + path;
exports.listImages = (req, res) => {
  const { path, sort, max } = req.body;

  let cloudFolder = folder + "/" + path;
  cloudinary.v2.search
    .expression(cloudFolder)
    .sort_by("created_at", `${sort}`)
    .max_results(max)
    .execute()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      return next(err);
    });
};

// cludinary single image
const uploadToCloudinary = async (file, path) => {
  const imgUrls = file.map((img) => {
    return cloudinary.v2.uploader.upload(img, { folder: path }, (err, res) => {
      if (err) {
        return { message: "Fail" };
      }
      return { url: res.secure_url };
    });
  });

  await Promise.all(imgUrls);
};

// const tempRemove = (path) => {
//   fs.unlink(path, (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// };


// multi image upload

