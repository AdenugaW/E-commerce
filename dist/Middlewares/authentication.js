import jwt from "jsonwebtoken";
export const authentication = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.json({ message: "You are not authenticated!" });
    }
    try {
        const userInfo = jwt.verify(token, process.env.SIG_SECRET);
        req.user = userInfo;
    }
    catch (error) {
        return res.send(error);
    }
    next();
};
export default authentication;
//# sourceMappingURL=authentication.js.map