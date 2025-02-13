import { User } from "../models/User.ts";
import UserServiceQuery from "./UserServiceQuery.ts";
import UserServiceCommand from "./UserServiceCommand.ts";

class UserService {

    static getUsers = async (): Promise<User[]> => {
        return await new UserServiceQuery().getUsers();
    };

    static getUserById = async (id: string): Promise<User> => {
        return await new UserServiceQuery().getUserById(id);
    };

    static createUser = async (user: Partial<User>) => {
        return await new UserServiceCommand().createUser(user);
    };

    static deleteUser = async (id: number) => {
        return await new UserServiceCommand().deleteUser(id);
    };

}

export default UserService;
