import { User } from "../models/User.ts";
import UserServiceQuery from "./UserServiceQuery.ts";
import UserServiceCommand from "./UserServiceCommand.ts";

class UserService {

    getUsers = async (): Promise<User[]> => {
        return await new UserServiceQuery().getUsers();
    };

    getUserById = async (id: string): Promise<User> => {
        return await new UserServiceQuery().getUserById(id);
    };

    createUser = async (user: Partial<User>) => {
        return await new UserServiceCommand().createUser(user);
    };

    deleteUser = async (id: number) => {
        return await new UserServiceCommand().deleteUser(id);
    };

}

export default UserService;
