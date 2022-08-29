interface IVersion {
  big: number;
  middle: number;
  small: number;
  stable: boolean;
  title: string | null;
  date: [number, number, number];
}

export default IVersion;
