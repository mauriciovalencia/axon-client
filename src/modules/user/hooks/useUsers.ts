import { useEffect, useState } from "react";
import { User } from "../models/User.ts";
import UserService from "../services/UserService.ts";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const getUsers = async (): Promise<User[]> => {
        return await new UserService().getUsers();
    };
    const deleteUser = async (id: number): Promise<void> => {
        await new UserService().deleteUser(id);
    };

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    const removeUser = async (id: number) => {
        await deleteUser(id);
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    return { users, removeUser };
};
