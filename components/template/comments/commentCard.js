import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteCourseModal from "../index/deleteModal";

export default function CommentCard({ id, body }) {
  const [showDeleteCommentModal, setShowDeleteCommentModal] = useState(false);
  const closeDeleteCommentModal = () =>
    setShowDeleteCommentModal((prev) => !prev);

  const removeComment = async () => {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      toast.success("!کامنت مورد نظر با موفقیت حذف شد", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.log("comment delete toast have error", res.status);
      alert("have a error !!!");
    }
  };

  return (
    <>
      <div className="flex md:flex-row flex-col justify-around items-center  bg-white border border-gray-200 rounded-lg  w-full my-4 p-4 shadow-lg hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <p className="flex text-center  tracking-tight text-gray-600 max-w-[200px]">
          {body}
        </p>
        <p className="flex text-center font-medium tracking-tight text-gray-600">
          mmmm
        </p>
        <p className="flex text-center font-medium tracking-tight text-gray-600">
          marziehmonshizade@yahoo.com
        </p>
        <p className="flex text-center font-medium tracking-tight text-gray-600">
          React js
        </p>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={(e) => {
            e.preventDefault();
            closeDeleteCommentModal();
          }}
        >
          حذف
        </button>
      </div>
      {showDeleteCommentModal && (
        <DeleteCourseModal
          removeHandler={removeComment}
          closeDeleteModal={closeDeleteCommentModal}
        />
      )}
    </>
  );
}
