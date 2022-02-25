import PostAdd from "../../../controller/Post/PostAdd";
import PostGet from "../../../controller/Post/PostGet";
import PostUpdate from "../../../controller/Post/PostUpdate";
import SendResponse from "../../../helper/SendResponse";

export default async function post(req, res) {
  switch (req?.method) {
    case "POST":
      await PostAdd(req, res);
      break;
    case "GET":
      await PostGet(req, res);
      break;
    case "PUT":
      await PostUpdate(req, res);
      break;
    default:
      res
        .status(400)
        .json(SendResponse(false, "Don't understand your request."));
      break;
  }
}
