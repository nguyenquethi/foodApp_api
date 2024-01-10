import express from 'express'
import { addOrder } from '../controllers/userController.js';

const userRoutes = express.Router();
userRoutes.post("/add-order", addOrder);

export {userRoutes};