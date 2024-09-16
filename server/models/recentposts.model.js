const recentPostsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, "Excerpt is required"],
      trim: true,
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
      trim: true,
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Categories are required"],
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const RecentPosts = mongoose.model("RecentPost", recentPostsSchema);

export default RecentPosts;
