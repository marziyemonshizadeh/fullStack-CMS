import DetailsSection from "@/components/modules/detailsSection/detailsSection";
import userModel from "@/models/user";
import { verifyToken } from "@/utils/auth";
import connectToDB from "@/utils/db";

export default function Profile({ user }) {
  console.log(user);
  return (
    <div>
      <div className="max-w-lg rounded overflow-hidden shadow-lg m-auto my-10 p-10">
        <DetailsSection text="نام " value={user.firstName} />
        <DetailsSection text="نام خانوادگی" value={user.lastName} />
        <DetailsSection text="نام کاربری" value={user.userName} />
        <DetailsSection text="ایمیل" value={user.email} />
        <DetailsSection text="نقش" value={user.role} />
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { token } = context.req.cookies;
  connectToDB();
  console.log("token == ", token);
  // if user have not token redirect to login page
  if (!token) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  const tokenPayload = verifyToken(token);
  // if token is not valid redirect again to login page
  if (!tokenPayload) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  //find user information
  const user = await userModel.findOne(
    {
      email: tokenPayload.email,
    },
    "-_id firstName lastName userName email role"
  );
  console.log("user == ", user);
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
