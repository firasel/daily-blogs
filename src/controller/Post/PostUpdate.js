import SendResponse from "../../helper/SendResponse";
import dbConnect from "../../lib/dbConnect";
import post from "../../models/post";

const PostUpdate = async (req, res) => {
  try {
    await dbConnect();
    const { email } = req.headers;
    const { publish, deleted, _id } = req.body;
    const verifyUserPost = await post.exists({ _id, email });
    if (verifyUserPost) {
      const updatePost = await post.findByIdAndUpdate(
        _id,
        {
          publish,
          deleted,
          updatedAt: Date.now(),
        },
        { new: true }
      );

      if (updatePost) {
        res
          .status(200)
          .send(SendResponse(true, "Post updated successfull.", updatePost));
      } else {
        res
          .status(500)
          .send(SendResponse(false, "Found an error from the backend."));
      }
    } else {
      res.status(400).send(SendResponse(false, "Bad request."));
    }
  } catch (error) {
    res
      .status(500)
      .send(SendResponse(false, "Found an error from the backend."));
  }
};

export default PostUpdate;
