import { useState } from "react";
import UserCard from "./UserCard.tsx";
import { useUsers } from "../../hooks/useUsers.ts";
import "../../styles/UserCard.css";

const UserList = () => {
    const { users, removeUser } = useUsers();
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (id: number) => {
        setDeletingId(id);
        setTimeout(() => {
            removeUser(id);
        }, 500);
    };

    return (
        <div className="user-list">
            {users.length === 0 ? (
                <p className="no-users">No hay usuarios registrados.</p>
            ) : (
                users.map((user) => (
                    <UserCard key={user.id} user={user} deleting={deletingId === user.id} onDelete={handleDelete} />
                ))
            )}
        </div>
    );
};

export default UserList;
