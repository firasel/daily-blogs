import AllPostGet from "../../../controller/public-post/AllPostGet";
import HeaderPostGet from "../../../controller/public-post/HeaderPostGet";
import SendResponse from "../../../helper/SendResponse";

export default async function post(req, res) {
  switch (req?.method) {
    case "GET":
      const { type } = req.headers;
      if (type === "header-post") {
        await HeaderPostGet(req, res);
      } else if (type === "all-post") {
        await AllPostGet(req, res);
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
