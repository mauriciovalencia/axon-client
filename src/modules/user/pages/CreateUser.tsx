import { useNavigate } from "react-router";
import UserForm from "../components/statefull/UserForm.tsx";
import UserService from "../services/UserService.ts";
import "../../../styles/Form.css"
import "../styles/CreateUser.css";

const CreateUser = () => {
    const navigate = useNavigate();

    const handleSubmit = async (formData: any): Promise<void> => {
        await UserService.createUser(formData);
        navigate("/users");
    };

    return (
        <div className="user-list">
            <h2 className="user-form-title">Crear Nuevo Usuario</h2>
            <UserForm onSubmit={handleSubmit} onCancel={() => navigate("/users")}/>
        </div>
    );
};

export default CreateUser;
