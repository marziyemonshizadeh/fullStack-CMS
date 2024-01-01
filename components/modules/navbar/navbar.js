import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    console.log(search);
    // search.trim() <===> search !== undefined
    if (search !== undefined) {
      router.push(`/search?q=${search}`);
    }
  };
  console.log(router.query.q);

  useEffect(() => {
    setSearch(router.query.q);
  }, []);
  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <span className="absolute p-2 end-0 flex items-center ">
          <FaSearch onClick={searchHandler} />
        </span>
        <input
          type="text"
          placeholder="دوره ی مورد نظر را جستجو کنید ..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
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
