import Product from '../models/product.model.js';

export const SellProduct = async(req, res )=>{
    try{
        const{Name, Description, Price, PicturePath, Category, PostedBy} = req.body;

        const newProduct = new Product({
            Name: Name,
            Description: Description,
            Price: Price,
            PicturePath: PicturePath,
            Category: Category,
            PostedBy: PostedBy
        });

        await newProduct.save();

        res.status(201).json(newProduct);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}

export default SellProduct;