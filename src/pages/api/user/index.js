import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/user";

export default async function user(req, res) {
  console.log("1");
  await dbConnect();

  console.log("2");
  const users = await User.find({});
  console.log("3");
  res.status(200).json(users);
}
