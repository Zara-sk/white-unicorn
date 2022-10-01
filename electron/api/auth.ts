import { ipcRenderer } from "electron";

import axios from "axios";

type AuthPayload = {
  email: string;
  password: string;
  token?: string;
};

const authenticateUser = ({
  email,
  password,
}: AuthPayload): Promise<AuthPayload> => {
  return new Promise((resolve, reject) => {
    axios
      .post<AuthPayload>("http://127.0.0.1:5000/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.response.data.statusCode));
  });
};

export default { authenticateUser };
