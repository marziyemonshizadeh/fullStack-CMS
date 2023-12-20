import CourseCard from "@/components/modules/courseCard/courseCard";
import { useState } from "react";
import AddCourseModal from "./addCourseModal/addCourseModal";
import DeleteCourseModal from "./deleteCourseModal/deleteCourseModal";
import EditCourseModal from "./editCourseModal/editCourseModal";

export default function Title({ courses }) {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const closeAddCourseModal = () => setShowAddCourseModal((prev) => !prev);

  const [showDeleteCourseModal, setShowDeleteCourseModal] = useState(false);
  const closeDeleteCourseModal = () =>
    setShowDeleteCourseModal((prev) => !prev);

  const [showEditCourseModal, setShowEditCourseModal] = useState(false);
  const closeEditCourseModal = () => setShowEditCourseModal((prev) => !prev);
  return (
    <>
      {/* ADD COURSE BTN */}
      <div className="flex justify-between my-4">
        <h1 className="text-2xl font-bold tracking-tight">دوره ها</h1>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => setShowAddCourseModal((prev) => !prev)}
        >
          اضافه کردن دوره ی جدید
        </button>
      </div>
      {/* COURSES */}
      {courses?.map((item) => {
        return (
          <CourseCard
            src="https://faradars.org/wp-content/uploads/2018/03/fvds9612-png.png"
            title={item.title}
            closeDeleteCourseModal={closeDeleteCourseModal}
            closeEditCourseModal={closeEditCourseModal}
          />
        );
      })}
      {/* MODALS */}
      {showAddCourseModal && (
        <AddCourseModal closeAddCourseModal={closeAddCourseModal} />
      )}
      {showDeleteCourseModal && (
        <DeleteCourseModal closeDeleteCourseModal={closeDeleteCourseModal} />
      )}
      {showEditCourseModal && (
        <EditCourseModal closeEditCourseModal={closeEditCourseModal} />
      )}
    </>
  );
}
