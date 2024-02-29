import PagesHeader from "@/components/modules/pagesHeader/pagesHeader";
import { useState } from "react";
import AddTeacherModal from "./addTeacherModal";
import TeacherCard from "./teacherCard";

export default function Teachers({ teachers }) {
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const closeAddTeacherModal = () => setShowAddTeacherModal((prev) => !prev);

  const [data, setData] = useState([...teachers]);
  const getTeachers = async () => {
    const res = await fetch(`/api/teachers`);
    const teachersData = await res.json();

    console.log("Res =>", res);

    if (res.status === 200) {
      console.log(teachersData);
      setData(teachersData);
    }
  };
  return (
    <div>
      <PagesHeader
        title="اساتید"
        btnText="اضافه کردن  استاد جدید"
        clickHandler={closeAddTeacherModal}
      />
      {data?.map((i) => {
        return (
          <TeacherCard
            key={i._id}
            id={i._id}
            name={i.name}
            email={i.email}
            course={i.course}
          />
        );
      })}

      {/* MODALS */}
      {showAddTeacherModal && (
        <AddTeacherModal
          getTeachers={getTeachers}
          closeAddTeacherModal={closeAddTeacherModal}
        />
      )}
    </div>
  );
}
