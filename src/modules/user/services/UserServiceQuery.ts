import {User} from "../models/User.ts";
import axios from "axios";
import UserConfig from "../config/UserConfig.ts";

class UserServiceQuery {
    public getUsers = async (): Promise<User[]> => {
        const response = await axios.get(UserConfig.API_URL);
        return response.data;
    };

    public getUserById = async (id: string): Promise<User> => {
        const response = await axios.get(`${UserConfig.API_URL}/${id}`);
        return response.data;
    };
}

export default UserServiceQuery;
