import UserList from "../components/statefull/UserList.tsx";
import "../styles/Users.css";

const Users = () => {
    return (
        <div className="users-page">
            <h2>Lista de Usuarios</h2>
            <UserList />
        </div>
    );
};

export default Users;
