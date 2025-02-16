import {User} from "../models/User.ts";
import UserServiceQuery from "./UserServiceQuery.ts";
import UserServiceCommand from "./UserServiceCommand.ts";

class UserService {

    static getUsers = async (): Promise<User[]> => {
        try {
            return await new UserServiceQuery().getUsers()
        } catch (e) {
            console.error(e);
            throw new Error('Error al obtener usuarios');
        }
    };

    static getUserById = async (id: string): Promise<User> => {
        try {
            return await new UserServiceQuery().getUserById(id);
        } catch (e) {
            console.error(e);
            throw new Error('Error al obtener usuario');
        }
    };

    static createUser = async (user: Partial<User>) => {
        try{
            return await new UserServiceCommand().createUser(user);
        }catch (e) {
            console.error(e);
            throw new Error('Error al crear usuario');
        }
    };

    static deleteUser = async (id: number | null) => {
        try{
            return await new UserServiceCommand().deleteUser(id);
        }catch (e) {
            console.error(e);
            throw new Error('Error al eliminar usuario');
        }
    };

    static updateUser = async (id: number, user: Partial<User>) => {
        try{
            return await new UserServiceCommand().updateUser(id, user);
        }catch (e) {
            console.error(e);
            throw new Error('Error al actualizar usuario');
        }
    }

}

export default UserService;
