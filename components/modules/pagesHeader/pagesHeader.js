import { useEffect, useState } from "react";

export default function PagesHeader({ title, btnText, clickHandler }) {
  const [isLogedIn, setIsLogedIn] = useState(false);
  useEffect(() => {
    fetch("api/auth/me").then((res) => {
      if (res.status === 200) {
        setIsLogedIn(true);
      }
    });
  }, []);
  return (
    <div className="flex justify-between my-4">
      <h1 className="text-2xl font-bold tracking-tight"> {title}</h1>
      {btnText && isLogedIn && (
        <button
          type="button"
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => clickHandler()}
        >
          {btnText}
        </button>
      )}
    </div>
  );
}
