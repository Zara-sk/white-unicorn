declare interface Window {
  api: {
    window: {
      minimize(): void;
      toggleMaximize(): void;
      subscribeOnMaximizeToggle(f: any): void;
    };
  };
}
