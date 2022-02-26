import SendResponse from "../../helper/SendResponse";
import dbConnect from "../../lib/dbConnect";
import post from "../../models/post";

const AllPostIdGet = async (req, res) => {
  try {
    await dbConnect();
    // get latest post
    const allPostId = await post.find(
      { deleted: false, publish: true },
      { _id: 1 }
    );

    if (allPostId.length > 0) {
      res
        .status(200)
        .send(SendResponse(true, "Post data get success.", allPostId));
    } else {
      res.status(404).send(SendResponse(false, "Data not found."));
    }
  } catch (error) {
    res
      .status(500)
      .send(SendResponse(false, "Found an error from the backend."));
  }
};

export default AllPostIdGet;
