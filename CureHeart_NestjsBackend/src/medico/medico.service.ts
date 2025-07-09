import { Injectable } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Repository } from 'typeorm';
import { Medico } from './entities/medico.entity';
import { InjectRepository } from '@nestjs/typeorm';

//Se utiliza para gestionar los medicos

@Injectable()
export class MedicoService {

  constructor(
    @InjectRepository(Medico)
    private readonly medicoRepository: Repository<Medico>,

  ) {

  }

  async create(createMedicoDto: CreateMedicoDto) {
    const medico = createMedicoDto;

    return await this.medicoRepository.save({
      ...medico,
    });
  }

  // Funcion para obtener todos los especialidades de los medicos existente de forma distinc
  async getUniqueEspecialidades(): Promise<string[]> {
    const especialidades = await this.medicoRepository
      .createQueryBuilder('Medico')  
      .select('DISTINCT Medico.especialidad') 
      .getRawMany();

    return especialidades.map((row) => row.especialidad);
  }


  async findAll() {
    return await this.medicoRepository.find();
  }


  // Coger varios medico con las citas ordenada por tiempo
  async findMedicoByEspecialidad(especialidad: string): Promise<Medico[]> {
    return await this.medicoRepository
    .createQueryBuilder('Medico')
    .leftJoinAndSelect('Medico.citas', 'cita', 'cita.cumplido = :cumplido', { cumplido: false })
    .leftJoinAndSelect('Medico.horario','horarioMedico')
    .where('Medico.especialidad = :especialidad', { especialidad })
      .orderBy({
        'cita.date': 'ASC',
        'cita.time': 'ASC'
      })
    .getMany();
  }


  findOne(id: number) {
    return `This action returns a #${id} medico`;
  }

  // Coger un medico con la cita ordenada por tiempo
  async findByEmail(userEmail:string) {
    return await this.medicoRepository
   .createQueryBuilder('Medico')
   .leftJoinAndSelect('Medico.citas', 'cita', 'cita.cumplido = :cumplido', { cumplido: false })
   .leftJoinAndSelect('Medico.horario','horarioMedico')
   .where('Medico.userEmail = :userEmail', { userEmail })
      .orderBy({
        'cita.date': 'ASC',
        'cita.time': 'ASC'
      })
   .getOne();
}


  async update(id: number, updateMedicoDto: UpdateMedicoDto) {
    return await this.medicoRepository.update(id,updateMedicoDto);
  }

  remove(id: number) {
    return `This action removes a #${id} medico`;
  }


}
