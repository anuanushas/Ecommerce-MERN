import Jwt from "jsonwebtoken";

export const tokenmiddle = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token)
        return res.status(401).json({ message: "Token is not provided" })
    try {
        const decoded = Jwt.verify(token, process.env.Secret_Key)
        req.id = decoded._id;
        next();
    }
    catch (err) {
        console.log(err)
        return res.status(401).json({ message: "Token is not valid" })
    }

}












