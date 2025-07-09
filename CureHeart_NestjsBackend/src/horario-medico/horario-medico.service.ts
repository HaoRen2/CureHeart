import { Injectable } from '@nestjs/common';
import { CreateHorarioMedicoDto } from './dto/create-horario-medico.dto';
import { UpdateHorarioMedicoDto } from './dto/update-horario-medico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HorarioMedico } from './entities/horario-medico.entity';

@Injectable()
export class HorarioMedicoService {

  constructor(@InjectRepository(HorarioMedico)
              private readonly horiarioRepository: Repository<HorarioMedico>,) {
  }

  async create(createHorarioMedicoDto: CreateHorarioMedicoDto) {
    return await this.horiarioRepository.save(createHorarioMedicoDto);
  }


  async findAll() {
    return await this.horiarioRepository.find();
  }

  async update(id: number, updateHorarioMedicoDto: UpdateHorarioMedicoDto) {
    return await this.horiarioRepository.update(id,updateHorarioMedicoDto);
  }

  remove(id: number) {
    return `This action removes a #${id} horarioMedico`;
  }
}
