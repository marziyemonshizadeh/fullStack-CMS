import Comments from "@/components/template/comments/comments";
import connectToDB from "@/utils/db";

export default function comments() {
  return (
    <>
      <Comments />
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
