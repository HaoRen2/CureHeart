import { Cita } from 'src/citas/entities/cita.entity';
import { HorarioMedico } from 'src/horario-medico/entities/horario-medico.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Medico {

    @Column({primary: true, generated: true})
    id: number

    @Column()
    nombre: string;

    @Column()
    apellido1: string;

    @Column({nullable: true})
    apellido2: string;

    @Column()
    genero: string;

    @Column()
    telefono: string;

    @Column()
    especialidad: string;

    @Column()
    fechaNacimiento: Date;

    @OneToOne(() => Users, (user) => user.medico)
    @JoinColumn({ name: 'userEmail', referencedColumnName: 'email'})
    user: Users;

    @Column()
    userEmail: string;

    @OneToMany(()=> Cita, (cita) => cita.medico)
    citas: Cita[];

    @OneToOne( () => HorarioMedico, { eager: true, cascade: true })
    @JoinColumn()
    horario: HorarioMedico;
    

}
