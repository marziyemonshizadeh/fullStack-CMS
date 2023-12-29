import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <ul className="md:p-3 p-1 flex justify-between md:block shadow md:shadow-none sticky text-base px-3 font-bold tracking-tight">
        <li className="text-2xl font-bold tracking-tight md:block hidden">
          داشبورد
        </li>
        <li className="py-5">
          <Link href="/">صفحه ی اصلی</Link>
        </li>
        <li className="py-5">
          <Link href="users"> کاربران</Link>
        </li>
        <li className="py-5">
          <Link href="contactUs"> تماس با ما </Link>
        </li>
        <li className="py-5">
          <Link href="aboutUs">درباره ی ما </Link>
        </li>
        <li className="py-5 md:border-t-2 border-gray-300">
          <Link href="#"> خروج</Link>
        </li>
      </ul>
    </>
  );
}
