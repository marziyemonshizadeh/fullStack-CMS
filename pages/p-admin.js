import UserModel from "@/models/user";
import { verifyToken } from "@/utils/auth";
import connectToDB from "@/utils/db";

function PAdmin({ user }) {
  return (
    <h1 className="text-center font-bold my-14">
      ❤️ Welcome To Admin Panel, {user.firstName} - {user.lastName} ❤️
    </h1>
  );
}

// SSR - Route Protection (Server Side ✅ - Client Side)
export async function getServerSideProps(context) {
  const { token } = context.req.cookies;
  connectToDB();

  if (!token) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  const tokenPayload = verifyToken(token);

  if (!tokenPayload) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  const user = await UserModel.findOne(
    {
      email: tokenPayload.email,
    },
    "-_id firstName lastName role"
  );

  if (user.role !== "ADMIN") {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default PAdmin;
