import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET,
});

export const UploadImage = async (file) => {
    try {
        const res = await cloudinary.v2.uploader.upload(file, {
            folder: "ProductImages",
            width: 400,
            crop: "scale",
        });

        return res.secure_url;
    } catch (error) {

        throw new Error(error.message);
    }
}

export default {cloudinary, UploadImage}
