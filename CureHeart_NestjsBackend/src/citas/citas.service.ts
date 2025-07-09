import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './entities/cita.entity';

@Injectable()
export class CitasService {

  constructor(@InjectRepository(Cita)
              private readonly citaRepository: Repository<Cita>) {
  }
  
  async create(createCitaDto: CreateCitaDto) {
    return await this.citaRepository.save(createCitaDto);
  }

  //Encontrar todas las citas que pertenece a se paciente de forme ordenado
  async findAllPaciente(id: number) {
    return await this.citaRepository.find({
      where: { paciente: { id } },
      order: {
        date: 'ASC',
        time: 'ASC',
      },
      relations: ['paciente', 'medico'],
    });
  }

  async getCitasPorMedico(id: number): Promise<Cita[]> {
    return await this.citaRepository.find({ where: { medico: {id} } });
  }

  async findAllMedico(id: number) {
    return await this.citaRepository.find(
      {
        where: { paciente: { id } },
        order: {
          date: 'ASC',
          time: 'ASC',
        },
        relations: ['paciente', 'medico'],
      }
    )
  }

  async findOne(id: number) {
    const cita = await this.citaRepository.findOneBy({id});
    if (!cita){
      throw new BadRequestException('Cita no encontrado')
    }

    return cita
  }

  async update(id: number, updateCitaDto: UpdateCitaDto) {
   return await this.citaRepository.update(id,updateCitaDto)
  }

  async remove(id: number) {
    const citas = await this.citaRepository.findOneBy({id});
    return await this.citaRepository.delete(citas);
   }

 
}
