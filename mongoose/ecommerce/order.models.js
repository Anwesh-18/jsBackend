import mongoose from "mongoose"

const orderItemSchema = mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.objectId,
        ref: "product"
    },
    quantity:{
        type: Number,
        required: true,
    }
}) 

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true,
    },
    costumer:{
        type: mongoose.Schema.Types.ObectId,
        ref: "User"
    },
    orderItems:{
        type:[orderItemSchema]
    }
},{timestamps: true})

export const Order = mongoose.model("Order",orderSchema)