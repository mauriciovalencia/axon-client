import { useEffect, useState } from "react";
import UserService from "../services/UserService.ts";
import { User } from "../models/User.ts";
import UserForm from "../components/statefull/UserForm.tsx";
import "../styles/UserDetail.css";

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const data = await UserService.getUsers();
        setUsers(data);
    };

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setShowForm(true);
    };

    const handleDelete = async (id: number | null) => {
        await UserService.deleteUser(id);
        fetchUsers();
    };

    const handleSubmit = async (data: User) => {
        if (selectedUser) {
            await UserService.updateUser(selectedUser.id!, data);
        } else {
            await UserService.createUser(data);
        }
        setShowForm(false);
        setSelectedUser(null);
        fetchUsers();
    };

    return (
        <div className="user-list">
            <button onClick={() => { setShowForm(true); setSelectedUser(null); }}>Crear Usuario</button>

            {showForm && <UserForm onSubmit={handleSubmit} user={selectedUser} />}

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.nombres} {user.apellidos} - {user.correoElectronico}
                        <button onClick={() => handleEdit(user)}>Editar</button>
                        <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
