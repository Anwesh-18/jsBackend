import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required:true,
      unique: true,
      lowercase: true
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password:{
      type: String,
      required: [true, "password is required"],
      unique: true,
      lowercase: true
    }
  },{timestamps: true} // it add two fields createdAt and updatedAt
);

export const User = new mongoose.model('User',userSchema) // it is preffered that var and "modelname" should be equal. Here.. User and 'User'