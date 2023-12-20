import Link from "next/link";

export default function CourseCard({
  src,
  title,
  closeDeleteCourseModal,
  closeEditCourseModal,
}) {
  return (
    <>
      <Link
        href="#"
        className="flex md:flex-row flex-col justify-between items-center bg-white border border-gray-200 rounded-lg  w-full my-4 shadow-lg hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <section className="md:flex md:items-center">
          {/* image */}
          <img
            className="object-fill h-auto max-w-full  md:rounded-r-lg  md:h-auto md:w-48 md:rounded-none  md:rounded-s-lg"
            src={src}
            alt="course"
          />
          {/* title */}
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight mx-4 text-gray-600 dark:text-white">
            {title}
          </h5>
        </section>
        {/* btns */}
        <section className="m-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => closeDeleteCourseModal()}
          >
            حذف
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => closeEditCourseModal()}
          >
            ویرایش
          </button>
        </section>
      </Link>
    </>
  );
}
