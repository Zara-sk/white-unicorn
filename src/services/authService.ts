import { AuthPayload } from "@src/types/auth";

const authenticateUser = (payload: AuthPayload): Promise<AuthPayload> => {
  return window.api.auth.authenticateUser(payload);
};

const setAuthPreferences = ({ email, password, token }: AuthPayload): void => {
  window.api.auth.setAuthPreferences({
    email,
    password,
    token,
  });
};

const startLauncher = (): void => {
  window.api.auth.startLauncher();
};

export default {
  authenticateUser,
  setAuthPreferences,
  startLauncher,
};
