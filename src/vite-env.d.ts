// <reference models="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_USERS_URL: string;
    readonly VITE_API_USER_KEY: string;
    readonly VITE_ENV: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
