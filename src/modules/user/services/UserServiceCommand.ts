import {User} from "../models/User.ts";
import axios from "axios";
import UserConfig from "../config/UserConfig.ts";

class UserServiceCommand {
    public createUser = async (user: Partial<User>) => {
        console.log("UserConfig.API_URL",UserConfig.API_URL);
        await axios.post(UserConfig.API_URL, user);
    };

    public deleteUser = async (id: number) => {
        await axios.delete(`${UserConfig.API_URL}/${id}`);
    };
}

export default UserServiceCommand;
