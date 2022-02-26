import SendResponse from "../../helper/SendResponse";
import dbConnect from "../../lib/dbConnect";
import post from "../../models/post";
import User from "../../models/user";

const AllPostGet = async (req, res) => {
  try {
    await dbConnect();
    let { page = 1, limit = 16 } = req.query;
    let modifyLimit = parseInt(limit) - 1;
    let modifyPage = parseInt(page) - 1;
    // get latest post
    const allPosts = await post
      .find({}, { content: 0, tags: 0, publish: 0, deleted: 0 })
      .sort({ _id: -1 })
      .skip(modifyPage * modifyLimit)
      .limit(parseInt(limit));
    // Next post available
    const nextPost = allPosts.length === parseInt(limit);
    // Remove last element from array
    allPosts.pop();

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

    if (allPosts) {
      res.status(200).send(
        SendResponse(true, "Post data get success.", {
          nextPost,
          posts: allPosts,
          users: userData,
        })
      );
    } else {
      res.status(404).send(SendResponse(false, "Data not found."));
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(SendResponse(false, "Found an error from the backend."));
  }
};

export default AllPostGet;