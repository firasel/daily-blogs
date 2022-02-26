import AllPostGet from "../../../controller/public-post/AllPostGet";
import AllPostIdGet from "../../../controller/public-post/AllPostIdGet";
import HeaderPostGet from "../../../controller/public-post/HeaderPostGet";
import SinglePostGet from "../../../controller/public-post/SinglePostGet";
import SendResponse from "../../../helper/SendResponse";

export default async function post(req, res) {
  switch (req?.method) {
    case "GET":
      const { type } = req.headers;
      if (type === "header-post") {
        await HeaderPostGet(req, res);
      } else if (type === "all-post") {
        await AllPostGet(req, res);
      } else if (type === "post") {
        await SinglePostGet(req, res);
      } else if (type === "id") {
        await AllPostIdGet(req, res);
      } else {
        res
          .status(400)
          .json(SendResponse(false, "Don't understand your request."));
      }
      break;
    default:
      res
        .status(400)
        .json(SendResponse(false, "Don't understand your request."));
      break;
  }
}
