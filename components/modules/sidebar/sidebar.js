import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <>
      <ul className="md:p-3 p-1 flex justify-between md:block shadow md:shadow-none sticky text-base px-3 font-bold tracking-tight select-none">
        <li className="text-2xl font-bold tracking-tight md:block hidden">
          داشبورد
        </li>
        <li className="py-5">
          <Link
            href="/"
            className={router.pathname == "/" ? "text-teal-400" : ""}
          >
            صفحه ی اصلی
          </Link>
        </li>
        <li className="py-5">
          <Link
            href="users"
            className={router.pathname == "/users" ? "text-teal-400" : ""}
          >
            کاربران
          </Link>
        </li>
        <li className="py-5">
          <Link
            href="aboutUs"
            className={router.pathname == "/aboutUs" ? "text-teal-400" : ""}
          >
            درباره ی ما
          </Link>
        </li>
        <li className="py-5">
          <Link
            href="contactUs"
            className={router.pathname == "/contactUs" ? "text-teal-400" : ""}
          >
            تماس با ما
          </Link>
        </li>
        <li className="py-5 md:border-t-2 border-gray-300">
          <Link href="#"> خروج</Link>
        </li>
      </ul>
    </>
  );
}
