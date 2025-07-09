import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Paciente } from '../../paciente/entities/paciente.entity';

@Entity()
export class Informe {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    date: Date

    @Column()
    autor: string;

    @Column('longblob')
    datos: Buffer;

    @ManyToOne(() => Paciente, (paciente) => paciente.id)
    paciente: Paciente;

}
