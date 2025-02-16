class UserConfig {
    private static localConfig = {
        API_URL: import.meta.env.VITE_API_USERS_URL || "http://localhost:8080/users",
        API_KEY: import.meta.env.VITE_API_USER_KEY || "nowajosepass"
    };

    private static prodConfig = {
        API_URL: import.meta.env.VITE_API_USERS_URL || "https://nowayjose.com",
        API_KEY: import.meta.env.VITE_API_USER_KEY || "nowayjosepass"
    };

    private static ENV = import.meta.env.VITE_ENV || "local";

    public static API_URL = UserConfig.ENV === "production" ? UserConfig.prodConfig.API_URL : UserConfig.localConfig.API_URL;
    public static API_KEY = UserConfig.ENV === "production" ? UserConfig.prodConfig.API_KEY : UserConfig.localConfig.API_KEY;
}

export default UserConfig;
