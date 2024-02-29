import User from "@/components/template/users/user";
import usersModel from "@/models/user.js";
import connectToDB from "@/utils/db";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function users({ users }) {
  return (
    <>
      <ToastContainer />
      <User users={users} />
    </>
  );
}
export async function getStaticProps(context) {
  // first connect to db
  connectToDB();
  const users = await usersModel.find({});
  console.log("users = ", users);
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
    revalidate: 60 * 60 * 12,
  };
}
