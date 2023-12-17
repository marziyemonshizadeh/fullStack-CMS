export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div class="relative">
        <div class="absolute p-2 end-0 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="جستجو کنید ..."
          className="h-8 p-4 md:min-w-[500px] rounded-lg bg-slate-100"
        />
      </div>
      <img
        alt="profile"
        src="https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp"
        className="rounded-full w-12"
      />
    </div>
  );
}
