import ModalsTemplate from "../../../modules/modalsTemplate/modalsTemplate";

export default function DeleteCourseModal({
  removeHandler,
  closeDeleteCourseModal,
}) {
  return (
    <>
      <ModalsTemplate>
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-5">
            آیا مطمئن هستید می خواهید دوره را حذف کنید ؟
          </h2>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              removeHandler();
              closeDeleteCourseModal();
            }}
          >
            بله
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => closeDeleteCourseModal()}
          >
            خیر
          </button>
        </div>
      </ModalsTemplate>
    </>
  );
}
