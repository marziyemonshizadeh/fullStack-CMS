import PagesHeader from "@/components/modules/pagesHeader/pagesHeader";
import { useState } from "react";
import AddCourseModal from "../index/addCourseModal/addCourseModal";
import CommentCard from "./commentCard";

export default function Comments({ comments }) {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const closeAddUserModal = () => setShowAddUserModal((prev) => !prev);
  const [data, setData] = useState([...comments]);

  const getComments = async () => {
    const res = await fetch(`/api/comments`);
    const commentsData = await res.json();

    if (res.status === 200) {
      console.log(commentsData);
      setData(commentsData);
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
      {data?.map((i) => {
        return <CommentCard key={i._id} id={i._id} body={i.body} />;
      })}

      {/* MODALS */}
      {showAddUserModal && (
        <AddCourseModal
          getCourses={getComments}
          closeAddCourseModal={closeAddUserModal}
        />
      )}
    </div>
  );
}
