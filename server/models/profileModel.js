import mongoose from "mongoose";
const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },

    gender: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ["user", "seller"],
        default: "user",

    },
    image: {
        type: String
    },

    cart: {
        type: Array,
        default: []
    },


}, { timestamps: true });


const Profile = mongoose.model("Profile", profileSchema);
export default Profile; 