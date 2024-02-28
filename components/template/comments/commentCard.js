export default function CommentCard() {
  return (
    <div className="flex md:flex-row flex-col justify-around items-center  bg-white border border-gray-200 rounded-lg  w-full my-4 p-4 shadow-lg hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <p className="flex text-center  tracking-tight text-gray-600 max-w-[200px]">
        {/* <span>کامنت=</span> */}
        درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
      </p>
      <p className="flex text-center font-medium tracking-tight text-gray-600">
        {/* <span>نام کاربری=</span> */}
        mmmm
      </p>
      <p className="flex text-center font-medium tracking-tight text-gray-600">
        {/* <span>ایمیل =</span> */}
        marziehmonshizade@yahoo.com
      </p>
      <p className="flex text-center font-medium tracking-tight text-gray-600">
        {/* <span>نام درس =</span> */}
        React js
      </p>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        حذف
      </button>
    </div>
  );
}
