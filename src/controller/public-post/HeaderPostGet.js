import SendResponse from "../../helper/SendResponse";
import dbConnect from "../../lib/dbConnect";
import post from "../../models/post";
import User from "../../models/user";

const HeaderPostGet = async (req, res) => {
  try {
    await dbConnect();
    // get latest post
    const allPosts = await post
      .find(
        { deleted: false, publish: true },
        { content: 0, tags: 0, publish: 0, deleted: 0 }
      )
      .limit(8);
    // Filter all post unique email
    const usersEmail = await allPosts
      .filter(
        (data, index, array) =>
          array.findIndex((data2) => data2.email == data.email) == index
      )
      .map((data) => data.email);
    // Get unique user data
    const userData = await User.find(
      { email: { $in: usersEmail } },
      { _id: 0, emailVerified: 0 }
    );

    if (allPosts?.length > 0) {
      res.status(200).send(
        SendResponse(true, "Post data get success.", {
          posts: allPosts,
          users: userData,
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

export default HeaderPostGet;
