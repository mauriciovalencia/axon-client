import {User} from "../models/User.ts";
import axios from "axios";
import UserConfig from "../config/UserConfig.ts";

class UserServiceQuery {
    private config = {
        headers: {
            'Accept': '*/*',
            'x-api-key': UserConfig.API_KEY
        }
    };

    public getUsers = async (): Promise<User[]> => {
        const response = await axios.get(UserConfig.API_URL, this.config);
        return response.data;
    };

    public getUserById = async (id: string): Promise<User> => {
        const response = await axios.get(`${UserConfig.API_URL}/${id}`, this.config);
        return response.data;
    };
}

export default UserServiceQuery;
