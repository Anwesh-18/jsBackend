import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    description:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    productImage:{
        type: String
    },
    price:{
        type: Number,
        default: 0,
    },
    stock:{
        default: 0,
        type:Number
    },
    category:{
        type: mongoose.Schema.Types.Object,
        ref: "category",
        required: true,
    },
    ownedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},{timestamps:true})

export const product = mongoose.model("product",productSchema)