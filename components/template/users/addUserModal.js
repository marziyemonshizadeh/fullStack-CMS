import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalsTemplate from "../../modules/modalsTemplate/modalsTemplate";
export default function AddUserModal({ getUsers, closeAddUserModal }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("clicked");
    await fetch("api/users", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 201) {
        getUsers();
        console.log("ok");
        toast.success("! کاربر مورد نظر با موفقیت اضافه شد", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
        closeAddUserModal();
      } else if (res.status === 422) {
        toast.warning("! داده ی شما معتبر نمی باشد", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (res.status === 404) {
        toast.error("!  خطای سمت سرور رخ داده است", {
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
      return res.data;
    });
  };
  return (
    <ModalsTemplate>
      <form className="max-w-sm mx-auto my-5" onSubmit={handleSubmit(onSubmit)}>
        <header className="text-2xl font-bold tracking-tight text-center mb-7">
          لطفا اطلاعات کاربر خود را وارد کنید
        </header>
        <input
          type="text"
          id="text"
          placeholder="نام کاربر"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("userName", { required: true })}
        />
        {errors.userName && (
          <p className="text-red-700">لطفا نام کاربر را وارد کنید !</p>
        )}
        <input
          type="text"
          id="text"
          placeholder="وضعیت کاربر"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("status", { required: true })}
        />
        {errors.status && (
          <p className="text-red-700">لطفا وضعیت کاربر را وارد کنید !</p>
        )}
        <input
          type="text"
          id="text"
          placeholder=" تعداد خرید"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("purchases", { required: true })}
        />
        {errors.purchases && (
          <p className="text-red-700">لطفا تعداد خرید را وارد کنید !</p>
        )}
        <input
          type="email"
          id="text"
          placeholder="ایمیل"
          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-700">لطفا ایمیل را وارد کنید !</p>
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
            closeAddUserModal();
            reset();
          }}
        >
          لغو
        </button>
      </form>
    </ModalsTemplate>
  );
}
