import {useEffect, useState} from "react";
import UserCard from "./UserCard.tsx";
import {User} from "../../models/User.ts";
import UserService from "../../services/UserService.ts";
import UserForm from "./UserForm.tsx";
import "../../styles/UserCard.css";
import "../../styles/UserList.css";

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const data = await UserService.getUsers();
            setUsers(data);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    };

    const handleEdit = (id: number | null) => {
        const userToEdit = users.find(user => user.id === id);
        if (userToEdit) {
            setSelectedUser(userToEdit);
            setShowForm(true);
        }
    };

    const handleCancel = () => {
        setShowForm(false);
        setSelectedUser(null);
        fetchUsers(); // Recargar la lista después de cancelar
    };

    const handleSubmit = async (data: User) => {
        try {
            if (selectedUser) {
                await UserService.updateUser(selectedUser.id!, data);
            }
            setShowForm(false);
            setSelectedUser(null);
            fetchUsers();
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
        }
    };

    return (
        <div className="user-list">
            <h2 className="user-form-title">
                {showForm ? `Editando usuario/a: ${selectedUser?.nombres || ""}` : `Usuarios registrados ${users.length}`}
            </h2>

            {showForm ? (
                <UserForm onSubmit={handleSubmit} user={selectedUser} onCancel={handleCancel} />
            ) : (
                <div className="user-cards-container">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <UserCard
                                key={user.id}
                                user={user}
                                onEdit={() => handleEdit(user.id)}
                                onDelete={() => UserService.deleteUser(user.id).then(fetchUsers)}
                            />
                        ))
                    ) : (
                        <p>No hay usuarios registrados.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserList;
