import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import "../../../../styles/Form.css";

const schema = yup.object().shape({
    nombres: yup.string().required("El nombre es obligatorio").min(2, "Mínimo 2 caracteres"),
    apellidos: yup.string().required("El apellido es obligatorio"),
    rut: yup.number().typeError("El RUT debe ser un número"),
    dv: yup.string().length(1, "El dígito verificador debe tener 1 caracter"),
    fechaNacimiento: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, "Formato de fecha inválido (YYYY-MM-DD)"),
    correoElectronico: yup.string().email("Correo inválido").required("El correo es obligatorio"),
    contrasena: yup.string().min(6, "Mínimo 6 caracteres").max(20, "Máximo 20 caracteres"),
});

const UserForm = ({ onSubmit, user, onCancel }: { onSubmit: (data: any) => void; user?: any; onCancel: () => void }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: user || {},
    });

    useEffect(() => {
        if (user) {
            reset(user);
        }
    }, [user, reset]);

    return (
        <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("nombres")} placeholder="Nombres"/>
            <p className="error">{errors.nombres?.message}</p>

            <input {...register("apellidos")} placeholder="Apellidos"/>
            <p className="error">{errors.apellidos?.message}</p>

            <input type="number" {...register("rut")} placeholder="RUT"/>
            <p className="error">{errors.rut?.message}</p>

            <input {...register("dv")} placeholder="Dígito Verificador" maxLength={1}/>
            <p className="error">{errors.dv?.message}</p>

            <input type="text" {...register("fechaNacimiento")} placeholder="Fecha de Nacimiento (YYYY-MM-DD)"/>
            <p className="error">{errors.fechaNacimiento?.message}</p>

            <input {...register("correoElectronico")} placeholder="Correo Electrónico"/>
            <p className="error">{errors.correoElectronico?.message}</p>

            <input type="password" {...register("contrasena")} placeholder="Contraseña"/>
            <p className="error">{errors.contrasena?.message}</p>

            <div className="user-form-buttons">
                <button type="submit">{user ? "Actualizar Usuario" : "Crear Usuario"}</button>
                <button type="button" onClick={onCancel} className="cancel-button">Cancelar</button>
            </div>
        </form>
    );
};

export default UserForm;
