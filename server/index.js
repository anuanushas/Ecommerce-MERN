import "dotenv/config";

import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/userRouter.js";
import sellerRouter from "./routes/sellerRouter.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";
import paymentRouter from "./routes/paymentRouter.js";
import cors from "cors";

const app = express();
mongoose
    .connect(process.env.Mongo_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/users', userRouter)
app.use('/api/sellers', sellerRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/payment', paymentRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});