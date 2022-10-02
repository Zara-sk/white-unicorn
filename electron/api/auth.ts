import { ipcRenderer } from "electron";

import axios from "axios";

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
      .catch((err) => {
        if (err.response.data != undefined) {
          reject(err.response.data.statusCode);
        } else {
          reject(500);
        }
      });
  });
};

const setAuthPreferences = (payload: AuthPayload) => {
  ipcRenderer.send("auth:set", payload);
};

const launchClient = () => {
  ipcRenderer.send("client:start");
};

export default { authenticateUser, setAuthPreferences, launchClient };
