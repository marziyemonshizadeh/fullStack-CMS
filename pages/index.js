import CourseCard from "@/components/modules/courseCard/courseCard";
import ModalsTemplate from "@/components/modules/modalsTemplate/modalsTemplate";
import Title from "@/components/template/index/title";
import coursesModel from "@/models/course.js";
import connectToDB from "@/utils/db";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [showDeleteCourseModal, setShowDeleteCourseModal] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setShowAddCourseModal((prev) => !prev);
    // axios.post("http://localhost:4001/Estates", data).then((res) => {
    //   console.log("get post called");
    //   toast.success("! ملک مورد نظر با موفقیت اضافه شد", {
    //     position: "bottom-left",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   return res.data;
    // });
    reset();
  };
  return (
    <main>
      <Title setShowAddCourseModal={setShowAddCourseModal} />

      {showAddCourseModal && (
        <ModalsTemplate>
          <form
            className="max-w-sm mx-auto my-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <header className="text-2xl font-bold tracking-tight text-center mb-7">
              لطفا اطلاعات دوره ی خود را وارد کنید
            </header>
            <input
              type="text"
              id="text"
              placeholder="عنوان دوره"
              className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-red-700">لطفا عنوان دوره را وارد کنید !</p>
            )}

            <input
              type="text"
              id="text"
              placeholder="آدرس تصویر مورد نظر را وارد کنید"
              className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("img", { required: true })}
            />
            {errors.img && (
              <p className="text-red-700">لطفا آدرس تصویر را وارد کنید !</p>
            )}

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              اضافه کردن
            </button>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => {
                setShowAddCourseModal((prev) => !prev);
              }}
            >
              لغو
            </button>
          </form>
        </ModalsTemplate>
      )}
      {showDeleteCourseModal && (
        <ModalsTemplate>
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-5">
              آیا مطمئن هستید می خواهید دوره را حذف کنید ؟
            </h2>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => setShowDeleteCourseModal((prev) => !prev)}
            >
              خیر
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              بله
            </button>
          </div>
        </ModalsTemplate>
      )}

      <CourseCard
        src="https://faradars.org/wp-content/uploads/2018/03/fvds9612-png.png"
        title="algoritm"
      />
      <CourseCard
        src="https://files.virgool.io/upload/users/89185/posts/kulesofpxkl6/zxek9hmagsff.png"
        title="mongo db"
      />
      <CourseCard
        src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
        title="next js"
      />
      <CourseCard
        src="https://media.geeksforgeeks.org/wp-content/uploads/20231211135520/Tailwind-CSS.webp"
        title="tailwind css"
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
