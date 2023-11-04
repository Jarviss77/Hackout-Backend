import Product from "../models/product.model.js";
import Service from "../models/service.model.js";
export const ProductDashboard = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

export const ServiceDashboard = async (req, res) => {
    try{
        const {id} = req.params;
        const service = await Service.findById(id);
        res.status(200).json(service);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

export default {ProductDashboard, ServiceDashboard};