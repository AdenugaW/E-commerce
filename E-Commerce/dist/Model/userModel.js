import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User",
    },
    cart: [
        {
            product: { type: mongoose.Types.ObjectId, ref: "Product" },
            quantity: { type: Number, min: 1, default: 1 },
        },
    ],
}, { timestamps: true });
const model = mongoose.model("User", userSchema);
export default model;
//# sourceMappingURL=userModel.js.map