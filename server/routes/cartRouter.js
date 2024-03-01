import express from "express";
import { tokenmiddle } from "../middleware/tokenmiddle.js";
import { addProductCart, getAllCart, removeProductCart, decrementProductCart, incrementProductCart } from "../controllers/cartController.js";


const cartRouter = express.Router();
cartRouter.post("/add", tokenmiddle, addProductCart);
cartRouter.delete("/remove/:id", tokenmiddle, removeProductCart);
cartRouter.get("/all", tokenmiddle, getAllCart);
cartRouter.put("/decrement", tokenmiddle, decrementProductCart);
cartRouter.put("/increment", tokenmiddle, incrementProductCart);


export default cartRouter;