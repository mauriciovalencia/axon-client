
import { motion } from "framer-motion";
import "../../styles/UserCard.css";

const UserCard = ({
                      user,
                      deleting,
                      onEdit,
                      onDelete
                  }: {
    user: { id: number; nombres: string; apellidos: string; correoElectronico: string },
    deleting: boolean,
    onEdit: (id: number) => void,
    onDelete: (id: number) => void
}) => {
    return (
        <motion.div
            className="user-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: deleting ? 0 : 1, y: deleting ? -10 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>{user.nombres} {user.apellidos}</h2>
            <p>{user.correoElectronico}</p>
            <div className="user-card-actions">
                <button className="edit-button" onClick={() => onEdit(user.id)}>Editar</button>
                <button className="delete-button" onClick={() => onDelete(user.id)}>Eliminar</button>
            </div>
        </motion.div>
    );
};

export default UserCard;
