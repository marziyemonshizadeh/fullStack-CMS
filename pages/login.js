import apiRequests from "@/configs/configs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function LogIn() {
  const router = useRouter();
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res = await apiRequests
      .post("auth/signin", JSON.stringify(data))
      .then((res) => res.data)
      .then(() => {
        alert("Logged In Successfully :))");
        reset();
        router.replace("/");
      })
      .catch((err) => {
        console.log("user not found :", err);
      });
    // const res = await fetch("/api/auth/signin", {
    //   method: "POST",
    //   headers: {
    //     "content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    console.log("res =>", res);
    // if (res.status === 200) {
    //   alert("Logged In Successfully :))");
    //   reset();
    //   router.replace("/");
    // } else if (res.status === 404) {
    //   alert("User Not Found :))");
    // } else if (res.status === 422) {
    //   alert("username or password is not correct :((");
    // } else if (res.status === 500) {
    //   alert("...");
    // }
  };
  //Rout Protection / client side
  useEffect(() => {
    fetch("api/auth/me").then((res) => {
      if (res.status === 200) {
        router.replace("/");
      }
    });
  }, []);
  return (
    <div className="max-w-[500px] mx-auto my-14">
      {/* <h2 className="text-2xl font-extrabold">
        برای مشاهده پروفایل باید اول وارد حساب کاربری خود شوید!
      </h2> */}
      <form
        className="bg-white shadow-md rounded w-full px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="identifier"
          >
            نام کاربری یا ایمیل
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="identifier"
            type="text"
            placeholder="نام کاربری یا ایمیل خود را وارد کنید"
            {...register("identifier", { required: true })}
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
