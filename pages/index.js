import AddCourseModal from "@/components/modules/addCourseModal/addCourseModal";
import CourseCard from "@/components/modules/courseCard/courseCard";
import DeleteCourseModal from "@/components/modules/deleteCourseModal/deleteCourseModal";
import EditCourseModal from "@/components/modules/editCourseModal/editCourseModal";
import Title from "@/components/template/index/title";
import coursesModel from "@/models/course.js";
import connectToDB from "@/utils/db";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const closeAddCourseModal = () => setShowAddCourseModal((prev) => !prev);
  const [showDeleteCourseModal, setShowDeleteCourseModal] = useState(false);
  const closeDeleteCourseModal = () =>
    setShowDeleteCourseModal((prev) => !prev);
  const [showEditCourseModal, setShowEditCourseModal] = useState(false);
  const closeEditCourseModal = () => setShowEditCourseModal((prev) => !prev);
  return (
    <main>
      <Title setShowAddCourseModal={setShowAddCourseModal} />
      <ToastContainer />
      {showAddCourseModal && (
        <AddCourseModal closeAddCourseModal={closeAddCourseModal} />
      )}
      {console.log("showDeleteCourseModal", showDeleteCourseModal)}
      {showDeleteCourseModal && (
        <DeleteCourseModal closeDeleteCourseModal={closeDeleteCourseModal} />
      )}
      {showEditCourseModal && (
        <EditCourseModal closeEditCourseModal={closeEditCourseModal} />
      )}

      <CourseCard
        src="https://faradars.org/wp-content/uploads/2018/03/fvds9612-png.png"
        title="algoritm"
        closeDeleteCourseModal={closeDeleteCourseModal}
        closeEditCourseModal={closeEditCourseModal}
      />
      <CourseCard
        src="https://files.virgool.io/upload/users/89185/posts/kulesofpxkl6/zxek9hmagsff.png"
        title="mongo db"
        closeDeleteCourseModal={closeDeleteCourseModal}
        closeEditCourseModal={closeEditCourseModal}
      />
      <CourseCard
        src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
        title="next js"
        closeDeleteCourseModal={closeDeleteCourseModal}
        closeEditCourseModal={closeEditCourseModal}
      />
      <CourseCard
        src="https://media.geeksforgeeks.org/wp-content/uploads/20231211135520/Tailwind-CSS.webp"
        title="tailwind css"
        closeDeleteCourseModal={closeDeleteCourseModal}
        closeEditCourseModal={closeEditCourseModal}
      />
    </main>
  );
}

export async function getStaticProps(context) {
  // first connect to db
  connectToDB();
  const courses = await coursesModel.find({});
  console.log("courses = ", courses);
  return {
    props: {},
    revalidate: 60 * 60 * 12,
  };
}
