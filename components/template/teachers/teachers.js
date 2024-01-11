import PagesHeader from "@/components/modules/pagesHeader/pagesHeader";
import { useState } from "react";
import AddCourseModal from "../index/addCourseModal/addCourseModal";
import TeacherCard from "./teacherCard";

export default function Teachers() {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const closeAddUserModal = () => setShowAddUserModal((prev) => !prev);
  const getTeachers = async () => {
    const res = await fetch(`/api/Teachers`);
    const teachersData = await res.json();

    console.log("Res =>", res);

    if (res.status === 200) {
      console.log(teachersData);
      setData(teachersData);
    }
  };
  return (
    <div>
      <PagesHeader
        title="اساتید"
        btnText="اضافه کردن  استاد جدید"
        clickHandler={closeAddUserModal}
      />

      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />

      {/* MODALS */}
      {showAddUserModal && (
        <AddCourseModal
          getCourses={getTeachers}
          closeAddCourseModal={closeAddUserModal}
        />
      )}
    </div>
  );
}
