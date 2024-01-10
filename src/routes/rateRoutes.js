import express from 'express'
import { createRate, getRate } from '../controllers/restaurantController.js';

const rateRoutes = express.Router();
rateRoutes.get("/get-rate", getRate);
rateRoutes.post("/create-rate", createRate);

export {rateRoutes};