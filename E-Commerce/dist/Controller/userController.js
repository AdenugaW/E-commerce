import UserModel from "../Model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const createUser = async (req, res, next) => {
    const { password, ...others } = req.body;
    // check if a user is existing
    const isUser = await UserModel.findOne({ email: others.email });
    if (isUser) {
        return res.json({ message: "User already exist!!" });
    }
    //hash the password of the user
    const hashPassword = bcrypt.hashSync(password, 10);
    try {
        const newUser = new UserModel({ password: hashPassword, ...others });
        const saveduser = await newUser.save();
        return res.json({ message: "You are successfully registered" });
    }
    catch (error) {
        next(error);
    }
};
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    //check if user is existing or not
    const isUser = await UserModel.findOne({ email });
    if (!isUser) {
        return res.json({ message: "User does not exist" });
    }
    //confirm the password of the user
    const isPassword = bcrypt.compareSync(password, isUser.password);
    if (!isPassword) {
        return res.json({ message: "Password is not correct" });
    }
    try {
        const payload = { userId: isUser.id, name: isUser.name, role: isUser.role };
        const token = jwt.sign(payload, process.env.SIG_SECRET);
        res.cookie("token", token);
        return res.json(isUser);
    }
    catch (error) {
        error;
    }
};
//# sourceMappingURL=userController.js.map