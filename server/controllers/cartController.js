import productModel from "../models/productModel.js";
import Profile from "../models/profileModel.js";
import Jwt from "jsonwebtoken";
import cartModel from "../models/cartModel.js";

export const addProductCart = async (req, res) => {
    try {
        const { dataId } = req.body;
        const user = await cartModel.findOne({ userId: req.id });
        if (!user) {
            const newCart = await cartModel.create({
                userId: req.id,
                items: [{ productId: dataId, quantity: 1 }]
            });
            return res.status(201).json({ newCart, message: "Product Added  to cart Successfully" });

        }
        const existingCart = user;
        const existingCartItems = existingCart.items;

        const index = existingCartItems.findIndex(item => item.productId.toString() === dataId);
        if (index !== -1) {
            existingCartItems[index].quantity += 1;
            existingCart.items = existingCartItems;
            await existingCart.save();
            return res.status(201).json({ message: "Product Added  to cart Successfully" });
        }

        existingCart.items.push({ productId: dataId, quantity: 1 });

        await existingCart.save();
        return res.status(201).json({ message: "Product Added to cart Successfully" });
    }



    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const removeProductCart = async (req, res) => {

    try {
        const user = await cartModel.findOne({ userId: req.id });
        if (!user) {
            return res.status(200).json({ message: "Cart is empty" });
        }
        const existingCartItems = user.items;
        const index = existingCartItems.findIndex(item => item.productId.toString() === req.params.id);
        if (index === -1) {
            return res.status(200).json({ message: "Product is not in cart" });


        }
        existingCartItems.splice(index, 1);
        await user.save();
        const productPromises = existingCartItems.map(async (item) => {
            const product = await productModel.findById({ _id: item.productId });
            return {
                product: product,
                quantity: item.quantity
            }

        });
        const datainCart = await Promise.all(productPromises);
        return res.status(200).json({ datainCart, message: "Products removed from cart" });

    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}
export const decrementProductCart = async (req, res) => {
    try {
        const user = await cartModel.findOne({ userId: req.id });
        if (!user) {
            return res.status(200).json({ message: "Cart is empty" });
        }
        const existingCartItems = user.items;
        const index = existingCartItems.findIndex(item => item.productId.toString() === req.body.id);
        if (index === -1) {
            return res.status(200).json({ message: "Product is not in cart" });

        }
        if (existingCartItems[index].quantity === 1) {
            existingCartItems.splice(index, 1);
            await user.save();
            const productPromises = existingCartItems.map(async (item) => {
                const product = await productModel.findById({ _id: item.productId });
                return {
                    product: product,
                    quantity: item.quantity
                }
            });
            const datainCart = await Promise.all(productPromises);
            return res.status(200).json({ datainCart, message: "Products removed from cart" });

        }
        existingCartItems[index].quantity -= 1;
        await user.save();
        const productPromises = existingCartItems.map(async (item) => {
            const product = await productModel.findById({ _id: item.productId });
            return {
                product: product,
                quantity: item.quantity
            }
        });
        const datainCart = await Promise.all(productPromises);
        return res.status(200).json({ datainCart, message: "Product quantity decremented Successfully" });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}


export const incrementProductCart = async (req, res) => {
    try {
        const user = await cartModel.findOne({ userId: req.id });
        if (!user) {
            return res.status(200).json({ message: "Cart is empty" });
        }
        const existingCartItems = user.items;
        const index = existingCartItems.findIndex(item => item.productId.toString() === req.body.id);
        if (index === -1) {
            return res.status(200).json({ message: "Product is not in cart" });

        }
        existingCartItems[index].quantity += 1;
        await user.save();
        const productPromises = existingCartItems.map(async (item) => {
            const product = await productModel.findById({ _id: item.productId });
            return {
                product: product,
                quantity: item.quantity
            }
        });
        const datainCart = await Promise.all(productPromises);
        return res.status(200).json({ datainCart, message: "Product quantity incremented Successfully" });
    }


    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });

    }

}


export const getAllCart = async (req, res) => {
    try {
        const user = await cartModel.findOne({ userId: req.id });
        if (!user) {
            return res.status(200).json({ message: "No Products in cart" });
        }
        const existingCartItems = user.items;
        const productPromises = existingCartItems.map(async (item) => {
            const product = await productModel.findById({ _id: item.productId });
            return {
                product: product,
                quantity: item.quantity
            }

        });
        const datainCart = await Promise.all(productPromises);
        return res.status(200).json({ datainCart, message: "Products added to cart" });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

