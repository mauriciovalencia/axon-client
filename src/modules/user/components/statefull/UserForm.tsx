import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import "../../../../styles/Form.css";

const schema = yup.object().shape({
    nombres: yup.string().required("El nombre es obligatorio").min(2, "Mínimo 2 caracteres"),
    apellidos: yup.string().required("El apellido es obligatorio"),
    correoElectronico: yup.string().email("Correo inválido").required("El correo es obligatorio"),
});

const UserForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <motion.form
            className="user-form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
        >
            <input {...register("nombres")} placeholder="Nombres" />
            <p className="error">{errors.nombres?.message}</p>

            <input {...register("apellidos")} placeholder="Apellidos" />
            <p className="error">{errors.apellidos?.message}</p>

            <input {...register("correoElectronico")} placeholder="Correo Electrónico" />
            <p className="error">{errors.correoElectronico?.message}</p>

            <button type="submit">Crear Usuario</button>
        </motion.form>
    );
};

export default UserForm;
