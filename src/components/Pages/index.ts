import IPage from "../../types/page";

import DebugPage from "./Debug";
import LibraryPage from "./Library";
import ProfilePage from "./Profile";
import SettingsPage from "./Settings";

const Pages: IPage[] = [ProfilePage, LibraryPage, DebugPage, SettingsPage];

export { default } from "./PagesRouter";

export { Pages };
