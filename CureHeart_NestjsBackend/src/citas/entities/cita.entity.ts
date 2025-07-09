import { Medico } from "src/medico/entities/medico.entity";
import { Paciente } from "src/paciente/entities/paciente.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Cita {

    @Column({primary: true, generated: true})
    id: number;

    @Column()
    nombrePaciente: string;

    @Column()
    nombreMedico: string;

    @Column()
    especialidad: string;

    @Column()
    descripcion: string;

    @Column({ type: 'date' })
    date: string;

    @Column({ type: 'time' })
    time: string;

    @Column({default: false})
    cumplido: boolean;

    @ManyToOne(() => Paciente, (paciente) => paciente.id)
    paciente: Paciente;

    @ManyToOne(() => Medico, (medico) => medico.id)
    medico: Medico;


}
