import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User } from "../models/User.ts";
import UserService from "../services/UserService.ts";
import "../styles/UserDetail.css";

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (id) {
            UserService.getUserById(id).then(setUser);
        }
    }, [id]);

    if (!user) return <p className="loading">Cargando usuario...</p>;

    return (
        <div className="user-detail">
            <h2>{user.nombres} {user.apellidos}</h2>
            <p><strong>Correo:</strong> {user.correoElectronico}</p>
        </div>
    );
};

export default UserDetail;
