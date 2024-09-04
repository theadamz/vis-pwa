/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_URL: string;
  readonly VITE_DATE_FORMAT: string;
  readonly VITE_TIME_FORMAT: string;
  readonly VITE_DATETIME_FORMAT: string;
  readonly VITE_THOUSAND_SEPARATOR: string;
  readonly VITE_DECIMAL_SEPARATOR: string;
  readonly VITE_PRECISION_LENGTH: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
