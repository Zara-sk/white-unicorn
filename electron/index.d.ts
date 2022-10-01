type subscribeFunction = (event: any, payload: any) => void;

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
      authenticateUser<T>(payload: T): Promise<T>;
    };
  };
}
