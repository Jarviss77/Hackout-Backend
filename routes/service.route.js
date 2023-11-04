import express from "express";
import { SellService } from '../controllers/sellservice.controller.js';
import { ServiceDashboard } from '../controllers/dashboard.controller.js';

const router = express.Router();

router.post('/sellservice', SellService);
router.get('/servicedashboard', ServiceDashboard);

export default router;