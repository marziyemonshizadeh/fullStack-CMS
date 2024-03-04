import CourseCard from "@/components/modules/courseCard/courseCard";
import PagesHeader from "@/components/modules/pagesHeader/pagesHeader";
import { useState } from "react";
import AddCourseModal from "./addCourseModal/addCourseModal";

export default function Courses({ courses }) {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const closeAddCourseModal = () => setShowAddCourseModal((prev) => !prev);

  //  for make real time => later use context
  const [data, setData] = useState([...courses]);
  const getCourses = async () => {
    const res = await fetch(`/api/courses`);
    const coursesData = await res.json();

    console.log("Res =>", res);

    if (res.status === 200) {
      console.log(coursesData);
      setData(coursesData);
    }
  };
  return (
    <>
      <PagesHeader
        title="دوره ها"
        btnText="اضافه کردن دوره ی جدید"
        clickHandler={closeAddCourseModal}
      />

      {/* COURSES */}
      {data?.map((item) => {
        return (
          <CourseCard
            teacher={item.teacher}
            src={item.img}
            title={item.title}
            price={item.price}
            id={item._id}
            key={item._id}
          />
        );
      })}
      {/* MODALS */}
      {showAddCourseModal && (
        <AddCourseModal
          getCourses={getCourses}
          closeAddCourseModal={closeAddCourseModal}
        />
      )}
    </>
  );
}
