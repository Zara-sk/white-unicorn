import IVersion from "./IVersion";

interface IServerGame {
  id: number;
  title: string;
  version: IVersion;
  zipSize: number;
  fullSize: number;
  date: string;
}

export default IServerGame;
