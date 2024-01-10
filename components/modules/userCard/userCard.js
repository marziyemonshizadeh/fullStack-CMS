export default function UserCard() {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center bg-white border border-gray-200 rounded-lg  w-full my-4 p-4 shadow-lg hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <section className="flex md:flex-row flex-col items-center gap-8">
        <img
          src="https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp"
          alt="user"
          className="rounded-full w-28"
        />
        <div className="leading-8">
          <p className="flex text-center font-bold tracking-tight text-gray-600">
            نام کاربری = <span className="text-lg"> marziii</span>
          </p>
          <p className="flex text-center font-bold tracking-tight text-gray-600">
            تعدا خرید = <span className="text-lg"> 3</span>
          </p>
          <p className="flex text-center font-bold tracking-tight text-gray-600">
            ایمیل = <span className="text-lg"> Marzieh@yahoo.com</span>
          </p>
          <p className="flex text-center font-bold tracking-tight text-gray-600">
            وضعیت = <span className="text-lg">کاربر </span>
          </p>
        </div>
      </section>
      <section>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          حذف
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          ویرایش
        </button>
      </section>
    </div>
  );
}
