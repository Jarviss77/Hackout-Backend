import Service from '../models/service.model.js';

const SellService= async(req, res )=>{
    try{
        const{Name, Description, Price, Category, PostedBy} = req.body;

        const newService = new Service({
            Name: Name,
            Description: Description,
            Price: Price,
            Category: Category,
            PostedBy: PostedBy
        });

        await newService.save();

        res.status(201).json(newService);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}

export default SellService;