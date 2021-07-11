/// <reference types="node">
/// <reference types="react">
/// <reference types="react-dom">

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "deployment" | "production" | "test";
    readonly PUBLIC_URL: string;
  }
}

declare module "*.svg" {
  const src: string;
  export default src;
}
