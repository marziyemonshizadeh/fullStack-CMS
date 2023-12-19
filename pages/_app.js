import Navbar from "@/components/modules/navbar/navbar";
import Sidebar from "@/components/modules/sidebar/sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl" className="grid grid-cols-6">
      <div className="md:col-span-1 col-span-6 bg-slate-100 md:h-screen min-h-32 sticky top-0 z-20">
        <Sidebar />
      </div>
      <div className="md:col-span-5 col-span-6 p-4">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
