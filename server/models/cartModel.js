import mongoose from "mongoose";

const CartDataSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
        min: 1
    },

},
    { timestamps: true }
);


const CartSchema = new mongoose.Schema({

    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profiles',
        required: true,

    },
    items: [CartDataSchema],
    modifiedOn:
    {
        type: Date,
        default: Date.now
    }
},
    { timestamps: true }

);
const cartModel = mongoose.model('Cart', CartSchema);

export default cartModel;