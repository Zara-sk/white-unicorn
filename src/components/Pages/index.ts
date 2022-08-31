import IPage from "../../types/page";

import DebugPage from "./Debug";
import LibraryPage from "./Library";

const Pages: IPage[] = [LibraryPage, DebugPage];

export { default } from "./PagesRouter";

export { Pages };
