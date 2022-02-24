import * as yup from "yup";

const postSchema = yup.object().shape({
  imgUrl: yup.string(),
  tags: yup.array(),
  title: yup
    .string()
    .required("Title is required.")
    .min(3, "The title is too short."),
  content: yup
    .string()
    .required("Post content required.")
    .min(10, "Post content too short."),
});

export default postSchema;
