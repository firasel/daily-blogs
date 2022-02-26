import SendResponse from "../../helper/SendResponse";
import dbConnect from "../../lib/dbConnect";
import post from "../../models/post";
import User from "../../models/user";

const SinglePostGet = async (req, res) => {
  try {
    await dbConnect();
    let { id } = req.query;
    // get latest post
    const postData = await post.findOne(
      { _id: id, deleted: false, publish: true },
      { deleted: 0 }
    );
    // Get unique user data
    const userData = await User.findOne(
      { email: postData?.email },
      { _id: 0, emailVerified: 0 }
    );

    if (postData) {
      res.status(200).send(
        SendResponse(true, "Post data get success.", {
          post: postData,
          user: userData,
        })
      );
    } else {
      res.status(404).send(SendResponse(false, "Data not found."));
    }
  } catch (error) {
    res
      .status(500)
      .send(SendResponse(false, "Found an error from the backend."));
  }
};

export default SinglePostGet;
