import bcrypt from "bcryptjs";
import Profile from "../models/profileModel.js";
import Jwt from "jsonwebtoken";

async function userRegister(req, res) {

    try {
        const { firstName, lastName, email, password, phone, address, gender, role, image } = req.body;
        const existingUser = await Profile.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Profile Email already exists" });
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const userProfile = await Profile.create({ firstName, lastName, email, password: hashpassword, phone, address, gender, role, image });
        return res.status(201).json({ message: "Profile Created Successfully", userProfile });



    }
    catch (err) {
        console.log("Register Error", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }




}

async function userLogin(req, res) {

    try {
        const { email, password } = req.body;
        const existingUser = await Profile.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }
        const token = Jwt.sign({ _id: existingUser._id }, process.env.Secret_Key, { expiresIn: "2h" });
        return res.status(200).json({ token, existingUser, "message": "Login Successful" });

    }
    catch (err) {
        console.log("Login Error", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}

async function UpdateProfile(req, res) {

    try {
        const { firstName, lastName, email, password, phone, address, gender, role, image } = req.body;
        const existingUser = await Profile.findOne({ _id: req.id });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }
        const token = Jwt.sign({ _id: existingUser._id }, process.env.Secret_Key, { expiresIn: "2h" });
        const hashpassword = await bcrypt.hash(password, 10);

        const userProfile = await Profile.findByIdAndUpdate(req.id, { firstName, lastName, email, password: hashpassword, phone, address, gender, role, image }, { new: true });
        return res.status(201).json({ token, userProfile, message: "Profile Updated Successfully" });
    }
    catch (err) {
        console.log("Login Error", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export { userRegister, userLogin, UpdateProfile };