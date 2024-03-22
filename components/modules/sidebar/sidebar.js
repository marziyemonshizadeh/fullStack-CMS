import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userAuth = async () => {
      const res = await fetch("/api/auth/me");
      if (res.status === 200) {
        setIsLoggedIn(true);
        const { data: user } = await res.json();
        if (user.role === "ADMIN") {
          setIsAdmin(true);
        }
      }
    };

    userAuth();
  });
  return (
    <>
      <ul className="md:p-3 p-1 flex justify-between md:block shadow md:shadow-none sticky text-base px-3 font-bold tracking-tight">
        <li className="text-2xl font-bold tracking-tight md:block hidden">
          داشبورد
        </li>
        <li className="py-5">
          <Link
            href="/"
            className={router.pathname == "/" ? "text-teal-400" : ""}
          >
            دوره ها
            {/* صفحه ی اصلی */}
          </Link>
        </li>
        {isLoggedIn ? (
          <>
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
                href="teachers"
                className={
                  router.pathname == "/teachers" ? "text-teal-400" : ""
                }
              >
                اساتید
              </Link>
            </li>
            <li className="py-5">
              <Link
                href="comments"
                className={
                  router.pathname == "/comments" ? "text-teal-400" : ""
                }
              >
                کامنت ها
              </Link>
            </li>
            <li className="py-5">
              <Link
                href="profile"
                className={router.pathname == "/profile" ? "text-teal-400" : ""}
              >
                پروفایل
              </Link>
            </li>
            {isAdmin && (
              <li className="py-5">
                <Link
                  href="p-admin"
                  className={
                    router.pathname == "/p-admin" ? "text-teal-400" : ""
                  }
                >
                  پنل ادمین
                </Link>
              </li>
            )}
          </>
        ) : (
          <>
            <li className="py-5">
              <Link
                href="login"
                className={router.pathname == "/login" ? "text-teal-400" : ""}
              >
                لاگین
              </Link>
            </li>
            <li className="py-5">
              <Link
                href="register"
                className={
                  router.pathname == "/register" ? "text-teal-400" : ""
                }
              >
                ثبت نام
              </Link>
            </li>
          </>
        )}

        <li className="py-5">
          <Link
            href="aboutUs"
            className={router.pathname == "/aboutUs" ? "text-teal-400" : ""}
          >
            درباره ی ما
          </Link>
        </li>
        {isLoggedIn && (
          <li className="py-5 md:border-t-2 border-gray-300">
            <Link href="#"> خروج</Link>
          </li>
        )}
      </ul>
    </>
  );
}
