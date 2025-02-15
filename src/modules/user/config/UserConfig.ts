class UserConfig {
    private static localConfig = {
        API_URL: import.meta.env.VITE_API_USERS_URL || "http://localhost:8080/users",
    };

    private static prodConfig = {
        API_URL: import.meta.env.VITE_API_USERS_URL || "https://nowayjose.com",
    };

    private static ENV = import.meta.env.VITE_ENV || "local";

    public static API_URL = UserConfig.ENV === "production" ? UserConfig.prodConfig.API_URL : UserConfig.localConfig.API_URL;
}

export default UserConfig;
