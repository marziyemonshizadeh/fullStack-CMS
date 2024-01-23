import PagesHeader from "@/components/modules/pagesHeader/pagesHeader";
import { useState } from "react";
import AddCourseModal from "../index/addCourseModal/addCourseModal";
import CommentCard from "./commentCard";

export default function Comments() {
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
      <PagesHeader title="کامنت ها" />
      <div className="flex justify-around items-center text-center mx-6">
        <p>کامنت</p>
        <p>نام کاربری</p>
        <p> ایمیل</p>
        <p> نام درس</p>
        <p> تسک</p>
      </div>
      <CommentCard />
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
