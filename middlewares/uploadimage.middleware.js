import UploadImage from '../utils/cloudinary.util.js';

export const uploadimage = async (req, res, next) => {
    try {
        const secureUrl = await UploadImage(req.file.path);
        req.body.PicturePath = secureUrl;
        res.status(200).json({ message: "Image uploaded successfully" });
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

