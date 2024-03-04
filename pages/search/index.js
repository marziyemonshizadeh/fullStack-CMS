import CourseCard from "@/components/modules/courseCard/courseCard";
import CourseModel from "@/models/course";
import connectToDB from "@/utils/db";

export default function Search({ courses }) {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight"> نتیجه ی سرچ</h1>
      {courses.length > 0 ? (
        <>
          {courses.map((item) => {
            return (
              <CourseCard
                src={item.src}
                title={item.title}
                id={item._id}
                key={item._id}
              />
            );
          })}{" "}
        </>
      ) : (
        <div className="text-red-700 text-lg font-medium text-center my-5">
          دوره ای یافت نشد !!!
        </div>
      )}
    </div>
  );
}
export async function getServerSideProps(context) {
  connectToDB();
  const { query } = context;
  console.log("query =", query);
  const courses = await CourseModel.find({
    title: { $regex: query.q.toUpperCase() },
  });

  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
    },
  };
}
