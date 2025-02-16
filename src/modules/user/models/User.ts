export interface User {
    id: number | null;
    nombres: string;
    apellidos: string;
    rut?: number | null;
    dv?: string | null;
    fechaNacimiento?: string | Date | null;
    correoElectronico: string;
    contrasena?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
}
