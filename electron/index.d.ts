type subscribeFunction = (event: any, payload: any) => void;

type AuthPayload = {
  email: string;
  password: string;
  token?: string;
};

declare interface Window {
  api: {
    window: {
      minimize(): void;
      toggleMaximize(): void;
      close(): void;

      subscribeOnMaximizeToggle(f: subscribeFunction): void;
      subscribeOnSizeChange(f: subscribeFunction): void;
    };
    auth: {
      authenticateUser(payload: AuthPayload): Promise<AuthPayload>;
      setAuthPreferences(payload: AuthPayload): void;
      launchClient(): void;
    };
  };
}
