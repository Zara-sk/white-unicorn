import IPage from "../../../types/page";

import ProfilePage from "./ProfilePage";
import UserIcon from "@components/assets/UserIcon";

const __profile_page: IPage = {
  path: "/profile",
  title: "Аккаунт",
  component: ProfilePage,
  icon: UserIcon,
};

export default __profile_page;
