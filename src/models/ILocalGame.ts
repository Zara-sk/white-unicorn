import IVersion from "./IVersion";

interface ILocalGame {
  id: number;
  title: string;
  version: IVersion;
  fullSize: number;
  date: string;
}

export default ILocalGame;
