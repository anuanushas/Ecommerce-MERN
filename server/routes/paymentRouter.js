import express from 'express';

import { createOrder, verifyPayment, getKey } from "../controllers/paymentControllers.js";
import { tokenmiddle } from '../middleware/tokenmiddle.js';


const paymentRouter = express.Router();

paymentRouter.post("/create", tokenmiddle, createOrder);
paymentRouter.post("/verify", tokenmiddle, verifyPayment);
paymentRouter.get("/getKey", tokenmiddle, getKey);

export default paymentRouter;



