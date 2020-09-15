import mongoose from "mongoose";
const Schema = mongoose.Schema;

const feedSchema = new Schema(
   {
      displayName: {
         type: String,
         required: true,
      },
      username: {
         type: String,
         required: true,
      },
      postImg: {
         type: String,
      },
      caption: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

export default mongoose.model("Post", feedSchema);
