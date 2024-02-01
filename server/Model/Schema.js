import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Mern_Todo = mongoose.model("user", TodoSchema);

export default Mern_Todo;
