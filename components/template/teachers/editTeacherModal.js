import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import ModalsTemplate from "../../modules/modalsTemplate/modalsTemplate";

export default function EditUserModal({
  name,
  email,
  editHandler,
  closeEditCourseModal,
}) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    editHandler(data);
    reset();
  };
  return (
    <ModalsTemplate>
      <form className="max-w-sm mx-auto my-5" onSubmit={handleSubmit(onSubmit)}>
        <header className="text-2xl font-bold tracking-tight text-center mb-7">
          لطفا اطلاعات جدید استاد خود را وارد کنید
        </header>
        <input
          type="text"
          id="text"
          defaultValue={name}
          placeholder="نام کاربری جدید"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-700">لطفا نام استاد جدید را وارد کنید !</p>
        )}

        <input
          type="email"
          id="text"
          defaultValue={email}
          placeholder="ایمیل"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-700">لطفاایمیل را وارد کنید !</p>
        )}

        <button
          type="submit"
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          آپدیت کردن
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            closeEditCourseModal();
            reset();
          }}
        >
          لغو
        </button>
      </form>
    </ModalsTemplate>
  );
}
