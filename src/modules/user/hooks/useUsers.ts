import { useEffect, useState } from "react";
import { User } from "../models/User.ts";
import UserService from "../services/UserService.ts";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        UserService.getUsers().then(setUsers);
    }, []);

    const removeUser = async (id: number) => {
        await UserService.deleteUser(id);
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    return { users, removeUser };
};
