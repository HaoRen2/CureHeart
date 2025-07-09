import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEnums } from '../../common/enums/rol.enum';
import { Paciente } from '../../paciente/entities/paciente.entity';
import { Medico } from 'src/medico/entities/medico.entity';
import { IsOptional } from 'class-validator';

@Entity()
export class Users {
    // @Column({primary: true, generated: true})
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable: false, select:false})
    password: string;

    @Column({type: 'enum' ,default: RoleEnums.PACIENTE, enum: RoleEnums})
    role: RoleEnums;

    @OneToOne(() => Paciente, (paciente) => paciente.user,{nullable: true})
    paciente: Paciente

    @OneToOne(() => Medico, (medico) => medico.user, {nullable: true})
    medico: Medico

}
