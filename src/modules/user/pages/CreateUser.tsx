import { useNavigate } from "react-router";
import UserForm from "../components/statefull/UserForm.tsx";
import UserService from "../services/UserService.ts";
import "../styles/CreateUser.css";

const CreateUser = () => {
    const navigate = useNavigate();

    const handleSubmit = async (formData: any): Promise<void> => {
        await new UserService().createUser(formData);
        navigate("/users");
    };

    return (
        <div className="create-user-page">
            <h2>Crear Nuevo Usuario</h2>
            <UserForm onSubmit={handleSubmit} />
        </div>
    );
};

export default CreateUser;
