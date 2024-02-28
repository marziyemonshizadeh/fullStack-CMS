import Teachers from "@/components/template/teachers/teachers";
import teachersModel from "@/models/teacher.js";
import connectToDB from "@/utils/db";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function teachers({ teachers }) {
  return (
    <>
      <ToastContainer />
      <Teachers teachers={teachers} />
    </>
  );
}
export async function getStaticProps(context) {
  // first connect to db
  connectToDB();
  const teachers = await teachersModel.find({});
  console.log("teachers = ", teachers);
  return {
    props: {
      teachers: JSON.parse(JSON.stringify(teachers)),
    },
    revalidate: 60 * 60 * 12,
  };
}
