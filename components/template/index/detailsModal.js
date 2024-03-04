import DetailsSection from "@/components/modules/detailsSection/detailsSection";
import ModalsTemplate from "../../modules/modalsTemplate/modalsTemplate";

export default function DetailsCourseModal({
  src,
  title,
  price,
  teacher,
  closeDetailsCourseModal,
}) {
  return (
    <ModalsTemplate>
      <form className="max-w-sm mx-auto my-5">
        <header className="text-2xl font-bold tracking-tight text-center mb-7">
          اطلاعات دوره
        </header>
        <DetailsSection text="عنوان دوره" value={title} />
        <DetailsSection text="آدرس تصویر" value={src} />
        <DetailsSection text="قیمت" value={price} />
        <DetailsSection text="آیدی مدرس " value={teacher} />

        <button
          type="button"
          className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => closeDetailsCourseModal()}
        >
          بستن
        </button>
      </form>
    </ModalsTemplate>
  );
}
