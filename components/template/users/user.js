import PagesHeader from "@/components/modules/pagesHeader/pagesHeader";
import UserCard from "@/components/modules/userCard/userCard";
import { useState } from "react";
import AddUserModal from "./addUserModal";

export default function User({ users }) {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const closeAddUserModal = () => setShowAddUserModal((prev) => !prev);

  //  for make real time => later use context
  const [data, setData] = useState([...users]);
  const getUsers = async () => {
    const res = await fetch(`/api/users`);
    const usersData = await res.json();

    console.log("Res =>", res);

    if (res.status === 200) {
      console.log(usersData);
      setData(usersData);
    }
  };

  return (
    <>
      <PagesHeader
        title="کاربران"
        btnText="اضافه کردن  کاربر جدید"
        clickHandler={closeAddUserModal}
      />

      {data?.map((i) => {
        return (
          <UserCard
            key={i._id}
            id={i._id}
            username={i.userName}
            status={i.status}
            purchases={i.purchases}
            email={i.email}
          />
        );
      })}
      {/* MODALS */}
      {showAddUserModal && (
        <AddUserModal
          getUsers={getUsers}
          closeAddUserModal={closeAddUserModal}
        />
      )}
    </>
  );
}
