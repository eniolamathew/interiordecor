export {};

declare global {
  interface Window {
    config: {
      rootUrl: string;
      rootApiUrl: string;
      version: string;
      microservices: object;
      timeoutCachedValues: number;
    };
  }
}