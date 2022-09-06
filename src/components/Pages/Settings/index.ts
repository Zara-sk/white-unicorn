import IPage from "../../../types/page";

import SettingsPage from "./SettingsPage";
import SettingsIcon from "@components/assets/SettingsIcon";

const __settings_page: IPage = {
  path: "/settings",
  title: "Настройки",
  component: SettingsPage,
  icon: SettingsIcon,
};

export default __settings_page;
