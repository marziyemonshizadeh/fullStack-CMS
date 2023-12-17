import Navbar from "@/components/modules/navbar/navbar";
import Sidebar from "@/components/modules/sidebar/sidebar.js";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl" className="grid grid-cols-6">
      <div className="col-span-1 h-screen bg-slate-100">
        <Sidebar />
      </div>
      <div className="col-span-5 p-4">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
