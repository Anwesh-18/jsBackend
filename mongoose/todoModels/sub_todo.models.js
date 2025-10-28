import mongoose from "mongoose"

const sub_todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // createdBy can be defined by reffering to the user object
  },{timestamps: true}
);

export const subtodo = mongoose.model('subTodo',sub_todoSchema)