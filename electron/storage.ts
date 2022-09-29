import Store from "electron-store";

export type SchemaType = {
  windowPreferences: {
    sizes: {
      width: number;
      height: number;
      x: number;
      y: number;
    };
    isMaximized: boolean;
  };
  authPreferences: {
    login: string | null;
    password: string | null;
    token: string | null;
  };
};

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
  authPreferences: {
    login: null,
    password: null,
    token: null,
  },
};

export enum STORAGE_KEYS {
  WINDOW = "windowPreferences",
  AUTH = "authPreferences",
}

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

interface AuthProps {
  login: string;
  password: string | null;
  token: string | null;
}

export const updateAuthPrefs = (props: AuthProps) => {
  store.set(STORAGE_KEYS.AUTH, props);
};

export const updateAuthToken = (token: string) => {
  const authPrefs = { ...store.get(STORAGE_KEYS.AUTH), token: token };
  store.set(STORAGE_KEYS.AUTH, authPrefs);
};

export default store;
