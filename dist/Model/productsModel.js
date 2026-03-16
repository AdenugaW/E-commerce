import mongoose, { Schema } from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: false,
    },
    stock: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });
const model = mongoose.model("Product", productSchema);
export default model;
//# sourceMappingURL=productsModel.js.map