import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true,
        trim: true,
    },
    category: {
        type: String,

        trim: true,
    },

    countStock: {
        type: Number,
        required: true,

    },
    image: {
        type: String,
        required: true,
        trim: true,
    },

    rating: {
        type: Number,

        trim: true,
    },
    numReviews: {
        type: Number,

        trim: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profiles",
        required: true
    }


}, { timestamps: true });
const productModel = mongoose.model("Product", productSchema);
export default productModel;

