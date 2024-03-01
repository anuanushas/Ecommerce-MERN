import Productmodel from "../models/productModel.js";


const addProduct = async (req, res) => {

    try {
        const product = await Productmodel.create(req.body);
        return res.status(201).json({ product, message: "Product Added Successfully" });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

const getAllproducts = async (req, res) => {
    try {
        const products = await Productmodel.find({});
        return res.status(200).json({ products, message: "Products Fetched Successfully" });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" });
    }
}
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Productmodel.findById(productId);
        return res.status(200).json({ product, message: "Product Fetched Successfully" });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" });
    }



}


const getSellerById = async (req, res) => {
    try {
        const products = await Productmodel.find({ seller: req.params.id });
        return res.status(200).json({ products, message: "Products Fetched Successfully" });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" });
    }

}

const removerSellerbyId = async (req, res) => {
    try {
        const product = await Productmodel.findByIdAndDelete(req.params.id);
        const products = await Productmodel.find({ seller: req.id });
        return res.status(200).json({ products, message: "Products Fetched Successfully" });
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" });
    }
}
const updateDataById = async (req, res) => {
    try {
        const product = await Productmodel.findByIdAndUpdate(req.body._id, req.body, { new: true });
        return res.status(200).json({ product, message: "Product Updated Successfully" });


    }
    catch {
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" });
    }


}
export { addProduct, getAllproducts, getProductById, getSellerById, removerSellerbyId, updateDataById };