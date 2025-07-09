import { Cita } from "src/citas/entities/cita.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../../users/entities/user.entity';
import { Informe } from '../../informe/entities/informe.entity';
import { DietasMed } from "src/dietas-med/entities/dietas-med.entity";

@Entity()
export class Paciente {

    // @Column({primary: true, generated: true})
    @PrimaryGeneratedColumn()
    id: number;

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
    fechaNacimiento: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => Informe, (informe) => informe.paciente)
    informes: Informe[];

    @OneToMany(()=> Cita, (cita) => cita.paciente)
    citas: Cita[];

    @OneToMany(()=> DietasMed, (dietasMed) => dietasMed.paciente)
    dietasMed: DietasMed[];

    @OneToOne(() => Users, (user) => user.paciente)
    @JoinColumn({ name: 'userEmail', referencedColumnName: 'email'})
    user: Users;

    @Column()
    userEmail: string;

}
