import userModel from "../Model/userModel.js";
import productModel from "../Model/productsModel.js";
export const addToCart = async (req, res, next) => {
    const { productId, quantity } = req.body;
    const userInfo = req.user;
    if (!productId) {
        return res.status(400).json({
            success: false,
            message: "Product Id is required!",
        });
    }
    const theProduct = await productModel.findById(productId);
    if (!theProduct) {
        return res.json(404).json({
            success: false,
            message: "Product is not found",
        });
    }
    // get the user info
    const user = await userModel.findById(userInfo.userId);
    if (!user) {
        return res.json({ message: "User not found" });
    }
    try {
        const itemIndex = user.cart.findIndex((item) => item.product?.toString() === productId);
    }
    catch (error) { }
};
//# sourceMappingURL=cartController.js.map