import express from 'express';

import { userRegister, userLogin, UpdateProfile } from '../controllers/userController.js';
import { tokenmiddle } from '../middleware/tokenmiddle.js';
const userRouter = express.Router();



userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.put("/update", tokenmiddle, UpdateProfile)


export default userRouter