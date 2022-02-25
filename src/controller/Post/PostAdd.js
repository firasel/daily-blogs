import SendResponse from "../../helper/SendResponse";
import dbConnect from "../../lib/dbConnect";
import post from "../../models/post";
import User from "../../models/user";

const PostAdd = async (req, res) => {
  try {
    await dbConnect();
    // Object destructuring
    const { email, title, content, imgUrl, tags } = req.body;
    // User check in database
    const userFind = await User.exists({ email });

    if (userFind) {
      // Post add in database
      post.create({ email, title, content, imgUrl, tags }, (err, postData) => {
        if (!err && postData) {
          res
            .status(201)
            .send(SendResponse(true, "Post created successful.", postData));
        } else {
          res
            .status(500)
            .send(SendResponse(false, "Found an error from the backend."));
        }
      });
    } else {
      res.status(404).send(SendResponse(false, "User not found."));
    }
  } catch (error) {
    res
      .status(500)
      .send(SendResponse(false, "Found an error from the backend."));
  }
};

export default PostAdd;
