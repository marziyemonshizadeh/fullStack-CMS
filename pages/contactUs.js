import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function contactUs() {
  return (
    <div className="my-4">
      <header className="text-2xl font-bold tracking-tight mb-8">
        تماس با ما
      </header>
      <section className="flex flex-col md:items-start items-center gap-y-4 text-xl">
        <div>
          <span className="text-lg font-bold">شماره تلفن : </span>
          09354444444
        </div>
        <div>
          <span className="text-lg font-bold">ایمیل : </span>
          marziehmonshizade@yahoo.com
        </div>
        <div>
          <span className="text-lg font-bold">نشانی : </span>
          تهران - تهران
        </div>
        <div className="flex gap-2">
          <Link href="#">
            <FaInstagram className="text-3xl text-pink-700" />
          </Link>
          <Link href="#">
            <FaTelegramPlane className="text-3xl text-cyan-500" />
          </Link>
          <Link href="https://www.linkedin.com/in/marzieh-monshizadeh-175a061a0">
            <FaLinkedinIn className="text-3xl text-blue-900" />
          </Link>
          <Link href="https://github.com/marziyemonshizadeh">
            <FaGithub className="text-3xl" />
          </Link>
          <Link href="#">
            <FaWhatsapp className="text-3xl text-green-600" />
          </Link>
        </div>
      </section>
    </div>
  );
}
