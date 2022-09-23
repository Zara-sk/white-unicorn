import Store from "electron-store";

export interface SchemaType {
  windowPreferences: {
    sizes: {
      width: number;
      height: number;
      x: number;
      y: number;
    };
    isMaximized: boolean;
  };
}

const defaults: SchemaType = {
  windowPreferences: {
    sizes: {
      width: 1100,
      height: 650,
      x: 100,
      y: 100,
    },
    isMaximized: false,
  },
};

export const STORAGE_KEYS: { [key: string]: keyof SchemaType } = {
  WINDOW: "windowPreferences",
};

const store = new Store<SchemaType>({ name: "settings", defaults: defaults });

interface WindowProps {
  pos?: number[];
  size?: number[];
  isM?: boolean;
}

export const updateWindowPrefs = ({ pos, size, isM }: WindowProps) => {
  const wp = store.get(STORAGE_KEYS.WINDOW);
  if (pos) {
    wp.sizes.x = pos[0];
    wp.sizes.y = pos[1];
  }
  if (size) {
    wp.sizes.width = size[0];
    wp.sizes.height = size[1];
  }
  if (isM !== undefined) {
    wp.isMaximized = isM;
  }
  store.set(STORAGE_KEYS.WINDOW, wp);
};

export default store;
