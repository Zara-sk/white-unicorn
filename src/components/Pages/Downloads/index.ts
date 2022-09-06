import IPage from "../../../types/page";

import DownloadsPage from "./DownloadsPage";
import DownloadsIcon from "@components/assets/DownloadsIcon";

const __downloads_page: IPage = {
  path: "/downloads",
  title: "Загрузки",
  component: DownloadsPage,
  icon: DownloadsIcon,
};

export default __downloads_page;
