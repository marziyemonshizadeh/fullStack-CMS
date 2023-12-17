import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <ul className="md:p-3 p-1">
        <li className="text-2xl font-bold tracking-tight">داشبورد</li>
        <li className="py-5">
          <Link href="">صفحه ی اصلی</Link>
        </li>
        <li className="py-5">
          <Link href=""> تماس با ما </Link>
        </li>
        <li className="py-5">
          <Link href="">درباره ی ما </Link>
        </li>
        <li className="py-5 border-t-2 border-gray-300">
          <Link href=""> خروج</Link>
        </li>
      </ul>
    </>
  );
}
