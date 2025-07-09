import { Cita } from 'src/citas/entities/cita.entity';
import { HorarioMedico } from 'src/horario-medico/entities/horario-medico.entity';
import { Users } from 'src/users/entities/user.entity';
export declare class Medico {
    id: number;
    nombre: string;
    apellido1: string;
    apellido2: string;
    genero: string;
    telefono: string;
    especialidad: string;
    fechaNacimiento: Date;
    user: Users;
    userEmail: string;
    citas: Cita[];
    horario: HorarioMedico;
}
