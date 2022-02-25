import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/user";

export default async function user(req, res) {
  await dbConnect();
  const users = await User.find({});
  res.status(200).json(users);
}
