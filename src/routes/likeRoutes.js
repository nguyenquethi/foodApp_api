import express from 'express'
import { getLike } from '../controllers/restaurantController.js';

const likeRoutes = express.Router();

likeRoutes.get("/get-like", getLike);

export {likeRoutes};