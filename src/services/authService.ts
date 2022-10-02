import { AuthPayload } from "@src/types/auth";

const authenticateUser = (payload: AuthPayload): Promise<AuthPayload> => {
  return window.api.auth.authenticateUser(payload);
};

export default {
  authenticateUser,
};
