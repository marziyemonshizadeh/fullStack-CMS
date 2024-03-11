import { useForm } from "react-hook-form";

export default function LogIn() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("clicked");
    console.log(data);
    reset();
  };
  return (
    <div className="max-w-[500px] mx-auto my-auto">
      <form
        className="bg-white shadow-md rounded w-full px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            نام کاربری یا ایمیل
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="نام کاربری یا ایمیل خود را وارد کنید"
            {...register("username", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            رمز عبور
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="رمز عبور"
            {...register("password", { required: true })}
          />
        </div>

        <div className="flex items-center justify-between">
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/register"
          >
            ثبت نام کنید
          </a>
          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            type="submit"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
}
