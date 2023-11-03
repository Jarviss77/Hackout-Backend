const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const UploadImage = async (file) => {
    try {
        const res = await cloudinary.v2.uploader.upload(file, {
            folder: "Olx",
            width: 400,
            crop: "scale",
        });

        return res.secure_url;
    } catch (error) {

        throw new Error(error.message);
    }
}

module.exports = cloudinary;
module.exports = UploadImage;
