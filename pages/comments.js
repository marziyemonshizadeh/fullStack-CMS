import Comments from "@/components/template/comments/comments";
import commentsModel from "@/models/comment.js";
import connectToDB from "@/utils/db";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function comments({ comments }) {
  return (
    <>
      <ToastContainer />
      <Comments comments={comments} />
    </>
  );
}
export async function getStaticProps(context) {
  // first connect to db
  connectToDB();
  const comments = await commentsModel.find({});
  console.log("comments = ", comments);
  return {
    props: {
      comments: JSON.parse(JSON.stringify(comments)),
    },
    revalidate: 60 * 60 * 12,
  };
}
