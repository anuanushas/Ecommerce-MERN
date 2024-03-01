import Profile from "../models/profileModel.js";
export const Sellermiddle = async (req, res, next) => {


    try {
        const user = await Profile.findOne({ _id: req.id });
        if (!user) {
            return res.status(401).json({ message: "Profile not found" });
        }
        if (user.role !== 'seller') {
            return res.status(401).json({ message: "Not a seller" });
        }
        next();


    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}