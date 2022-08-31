import IPage from "../../../types/page";

import DebugPage from "./DebugPage";
import DebugIcon from "@components/assets/DebugIcon";

const __debug_page: IPage = {
  path: "/debug",
  title: "Отладка",
  component: DebugPage,
  icon: DebugIcon,
};

export default __debug_page;
