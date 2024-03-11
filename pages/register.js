import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
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
    // await fetch("api/teachers", {
    //   method: "POST",
    //   headers: {
    //     "content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   if (res.status === 201) {
    //     getTeachers();
    //     toast.success("! استاد مورد نظر با موفقیت اضافه شد", {
    //       position: "bottom-left",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //     reset();
    //     closeAddTeacherModal();
    //   } else if (res.status === 422) {
    //     toast.warning("! داده ی شما معتبر نمی باشد", {
    //       position: "bottom-left",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //   } else if (res.status === 404) {
    //     toast.error("!  خطای سمت سرور رخ داده است", {
    //       position: "bottom-left",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //   }
    //   return res.data;
    // });
  };
  return (
    <div class="max-w-[500px] mx-auto my-8">
      <form
        class="bg-white shadow-md rounded w-full px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            نام
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="نام "
            {...register("firstName", { required: true })}
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            نام خانوادگی
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="نام خانوادگی"
            {...register("lastName", { required: true })}
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="userName"
          >
            نام کاربری
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userName"
            type="text"
            placeholder="نام کاربری"
            {...register("userName", { required: true })}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            رمز عبور
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="رمز عبور"
            {...register("password", { required: true })}
          />
        </div>
        {/* <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="status"
          >
            وضعیت
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="status"
            type="status"
            placeholder="please write user or admin"
            {...register("status", { required: true })}
          />
        </div> */}
        <div class="flex items-center justify-between">
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/login"
          >
            قبلا ثبت نام کرده اید /ورود
          </a>
          <button
            class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            type="submit"
          >
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
}
