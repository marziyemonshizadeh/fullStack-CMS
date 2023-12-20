import Courses from "@/components/template/index/courses";
import coursesModel from "@/models/course.js";
import connectToDB from "@/utils/db";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home({ courses }) {
  return (
    <main>
      <ToastContainer />
      <Courses courses={courses} />
    </main>
  );
}

export async function getStaticProps(context) {
  // first connect to db
  connectToDB();
  const courses = await coursesModel.find({});
  console.log("courses = ", courses);
  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
    },
    revalidate: 60 * 60 * 12,
  };
}
