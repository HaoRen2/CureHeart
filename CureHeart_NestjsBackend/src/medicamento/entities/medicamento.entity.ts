import { Column, Entity } from 'typeorm';

@Entity()
export class Medicamento {

  @Column({primary: true})
  numRegistro: string;

  @Column()
  medicamento: string;

  @Column()
  laboratorio: string;

  @Column()
  fechaAut: string;

  @Column()
  estado: string;

  @Column()
  fechaEstado: string;

  @Column()
  codATC: string;

  @Column('blob')
  principiosActivos: string;

  @Column()
  sustituible: string;

  @Column()
  comercializado: string;

  @Column()
  trianguloAmarillo: string;

  @Column()
  observaciones: string;

  @Column()
  afectaConduccion: string;

  @Column()
  problemasSuministro: string;
  
}
