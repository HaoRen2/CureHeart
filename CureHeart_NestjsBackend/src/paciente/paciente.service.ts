import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';
import { UserActiveInterface } from '../common/interfaces/user-active.interface';
import { CitasService } from 'src/citas/citas.service';
import { Cita } from 'src/citas/entities/cita.entity';

@Injectable()
export class PacienteService {

  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,

    @InjectRepository(Cita)
    private citaRepository: Repository<Cita>,
  ){}

  async create(createPacienteDto: CreatePacienteDto) {
     const paciente = createPacienteDto;

      return await this.pacienteRepository.save({
        ...paciente,
      });
  }

  async findAll() {
    return await this.pacienteRepository.find();
  }

  async findOne(id: number) {
    return await this.pacienteRepository.findOneBy({id});
  }

  //Coger los pacientes que ha solicitado una vez la cita a un medico
  async getPacientesPorMedicoId(medicoId: number) {
    return this.pacienteRepository.createQueryBuilder('paciente')
      .innerJoin('paciente.citas', 'cita', 'cita.medicoId = :medicoId', { medicoId })
      .getMany();
  }

  //Encontrar los pacientes con sus citas ordenade menor a mayor
  async findByEmail(userEmail:string) {
     return await this.pacienteRepository
    .createQueryBuilder('Paciente')
    .leftJoinAndSelect('Paciente.citas', 'cita', 'cita.cumplido = :cumplido', { cumplido: false })
    .where('Paciente.userEmail = :userEmail', { userEmail })
       .orderBy({
         'cita.date': 'ASC',
         'cita.time': 'ASC'
       })
    .getOne();
}


  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return await this.pacienteRepository.update(id,updatePacienteDto);
  }

  async remove(id: number) {
   const paciente = await this.pacienteRepository.findOneBy({id});
   return await this.pacienteRepository.delete(paciente);
  }
}
