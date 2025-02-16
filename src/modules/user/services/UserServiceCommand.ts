import {User} from "../models/User.ts";
import axios from "axios";
import UserConfig from "../config/UserConfig.ts";

class UserServiceCommand {
    private config = {
        headers: {
            'Accept': '*/*',
            'x-api-key': UserConfig.API_KEY
        }
    };

    public createUser = async (user: Partial<User>) => {
        await axios.post(UserConfig.API_URL, user, this.config);
    };

    public deleteUser = async (id: number) => {
        await axios.delete(`${UserConfig.API_URL}/${id}`, this.config);
    };

    public updateUser = async (id: number, user: Partial<User>) => {
        await axios.put(`${UserConfig.API_URL}/${id}`, user, this.config);
    };
}

export default UserServiceCommand;
