import express from 'express'
import { likeRoutes } from './likeRoutes.js';
import { rateRoutes } from './rateRoutes.js';

const rootRoutes = express.Router();

rootRoutes.use(likeRoutes);
rootRoutes.use(rateRoutes);

export default rootRoutes;