import { Cita } from "src/citas/entities/cita.entity";
import { Users } from '../../users/entities/user.entity';
import { Informe } from '../../informe/entities/informe.entity';
import { DietasMed } from "src/dietas-med/entities/dietas-med.entity";
export declare class Paciente {
    id: number;
    nombre: string;
    apellido1: string;
    apellido2: string;
    genero: string;
    telefono: string;
    fechaNacimiento: Date;
    deletedAt: Date;
    informes: Informe[];
    citas: Cita[];
    dietasMed: DietasMed[];
    user: Users;
    userEmail: string;
}
