import PagesHeader from "@/components/modules/pagesHeader/pagesHeader";
import User from "@/components/template/users/user";

export default function users() {
  return (
    <div>
      <PagesHeader title="کاربران" btnText="اضافه کردن  کاربر جدید" />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}
