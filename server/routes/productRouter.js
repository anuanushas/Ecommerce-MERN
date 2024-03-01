import express from "express";
import { addProduct } from "../controllers/productController.js";
import { getAllproducts } from "../controllers/productController.js";
import { getProductById } from "../controllers/productController.js";
import { tokenmiddle } from "../middleware/tokenmiddle.js";
import { Sellermiddle } from "../middleware/Sellermiddle.js";
import { getSellerById } from "../controllers/productController.js";
import { removerSellerbyId } from "../controllers/productController.js";
import { updateDataById } from "../controllers/productController.js";
const productRouter = express.Router();


productRouter.post("/add", tokenmiddle, Sellermiddle, addProduct);
productRouter.get("/all", getAllproducts);

productRouter.get("/:id", getProductById);
productRouter.get("/seller/:id", tokenmiddle, Sellermiddle, getSellerById);

productRouter.put("/update", tokenmiddle, Sellermiddle, updateDataById);

productRouter.delete("/remove/:id", tokenmiddle, Sellermiddle, removerSellerbyId);
export default productRouter;   