import express from "express";
import { SellProduct } from '../controllers/sellproduct.controller.js';
import { ProductDashboard } from '../controllers/dashboard.controller.js';
import { uploadimage } from '../middlewares/uploadimage.middleware.js';

const router = express.Router();

router.post('/sellproduct', uploadimage, SellProduct);
router.get('/productdashboard', ProductDashboard)

export default router;