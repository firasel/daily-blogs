import SendResponse from "../../helper/SendResponse";
import dbConnect from "../../lib/dbConnect";
import post from "../../models/post";

const PostGet = async (req, res) => {
  try {
    await dbConnect();
    const { email, type } = req.headers;

    const allPosts = await post
      .find({ email, deleted: false, publish: type !== "draft" })
      .sort({ _id: -1 });
    if (allPosts) {
      res
        .status(200)
        .send(SendResponse(true, "Post data get success.", allPosts));
    } else {
      res.status(404).send(SendResponse(false, "Data not found."));
    }
  } catch (error) {
    res
      .status(500)
      .send(SendResponse(false, "Found an error from the backend."));
  }
};

export default PostGet;
