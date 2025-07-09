import { RoleEnums } from '../../common/enums/rol.enum';
import { Paciente } from '../../paciente/entities/paciente.entity';
import { Medico } from 'src/medico/entities/medico.entity';
export declare class Users {
    id: number;
    email: string;
    password: string;
    role: RoleEnums;
    paciente: Paciente;
    medico: Medico;
}
