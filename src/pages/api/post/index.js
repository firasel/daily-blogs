import PostAdd from "../../../controller/Post/PostAdd";
import SendResponse from "../../../helper/SendResponse";

export default async function post(req, res) {
  switch (req?.method) {
    case "POST":
      await PostAdd(req, res);
      break;

    default:
      res
        .status(400)
        .json(SendResponse(false, "Don't understand your request."));
      break;
  }
}
