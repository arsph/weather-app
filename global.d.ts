/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_OPENWEATHER_API_KEY: string;
  // more env variables...
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
} 