import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum:["PENDING","CANCELED","DELIVERED"],
        default: "PENDING"
    }
},{timestamps: true});

export const User = mongoose.model("User",userSchema)