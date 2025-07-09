import { Paciente } from "src/paciente/entities/paciente.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class DietasMed {

    @Column({primary: true, generated: true})
    id: number;

    @Column()
    nombre: string;

    @Column()
    laboratorio: string;

    @Column()
    observacion: string;

    @Column()
    dosis: string;

    @Column({nullable: true})
    foto: string;

    @Column()
    afectaConduccion: boolean;

    @Column({nullable: true})
    linkhtml: string;

    @ManyToOne(() => Paciente, (paciente) => paciente.id)
    paciente: Paciente;

}
