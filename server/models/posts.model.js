import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    useId: { type: String, required: true },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    postImage: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "Uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    commentsCount: {
      type: Number,
      default: 0,
    },
    likesCount: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);

export default Post;
