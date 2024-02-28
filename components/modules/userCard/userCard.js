import DeleteCourseModal from "@/components/template/index/deleteModal";
import EditCourseModal from "@/components/template/index/editCourseModal/editCourseModal";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserCard({ id, username, status, purchases, email }) {
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const closeDeleteUserModal = () => setShowDeleteUserModal((prev) => !prev);

  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const closeEditUserModal = () => setShowEditUserModal((prev) => !prev);
  const removeUser = async () => {
    const res = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      setShowEditUserModal(false);
      toast.success("!  ::کاربر مورد نظر با موفقیت حذف شد", {
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
      console.log("user delete toast have error", res.status);
      alert("have a error !!!");
    }
  };

  const updateUser = async (data) => {
    const res = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: data.title }),
    });
    if (res.status === 200) {
      closeEditUserModal();
      toast.success("! دوره ی مورد نظر با موفقیت آپدیت شد", {
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
      toast.error("! error ", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center bg-white border border-gray-200 rounded-lg  w-full my-4 p-4 shadow-lg hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <section className="flex md:flex-row flex-col items-center gap-8">
          <img
            src="https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp"
            alt="user"
            className="rounded-full w-28"
          />
          <div className="leading-8">
            <p className="flex text-center font-bold tracking-tight text-gray-600">
              نام کاربری <span className="mx-2">: {username}</span>
            </p>
            <p className="flex text-center font-bold tracking-tight text-gray-600">
              تعدا خرید <span className="mx-2">: {purchases}</span>
            </p>
            <p className="flex text-center font-bold tracking-tight text-gray-600">
              ایمیل <span className="mx-2">: {email}</span>
            </p>
            <p className="flex text-center font-bold tracking-tight text-gray-600">
              وضعیت <span className="mx-2">: {status} </span>
            </p>
          </div>
        </section>
        <section>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={(e) => {
              e.preventDefault();
              closeDeleteUserModal();
            }}
          >
            حذف
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={(e) => {
              e.preventDefault();
              closeEditUserModal();
            }}
          >
            ویرایش
          </button>
        </section>
      </div>
      {showDeleteUserModal && (
        <DeleteCourseModal
          removeHandler={removeUser}
          closeDeleteModal={closeDeleteUserModal}
        />
      )}
      {showEditUserModal && (
        <EditCourseModal
          editHandler={updateUser}
          closeEditCourseModal={closeEditUserModal}
        />
      )}
    </>
  );
}
