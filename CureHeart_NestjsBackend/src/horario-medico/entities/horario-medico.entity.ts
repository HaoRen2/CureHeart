import { Medico } from "src/medico/entities/medico.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HorarioMedico {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('time')
    horaInicio: string;

    @Column('time')
    horaFin: string;

    @OneToOne(() => Medico, medico => medico.horario)
    @JoinColumn()
    medico: Medico;

}   
