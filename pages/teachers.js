import Teachers from "@/components/template/teachers/teachers";
import connectToDB from "@/utils/db";

export default function teachers() {
  return (
    <>
      <Teachers />
    </>
  );
}
export async function getStaticProps(context) {
  // first connect to db
  connectToDB();

  return {
    props: {},
    revalidate: 60 * 60 * 12,
  };
}
