import { Injectable } from '@nestjs/common';
import { CreateDietasMedDto } from './dto/create-dietas-med.dto';
import { DietasMed } from './entities/dietas-med.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Informe } from '../informe/entities/informe.entity';

// Tabla de los medicamentos de cada paciente que esta tomando;
@Injectable()
export class DietasMedService {

  constructor(
    @InjectRepository(DietasMed)
    private readonly dietasMedRepository: Repository<DietasMed>,
  ){}

  async create(createDietasMedDto: CreateDietasMedDto) {
    return await this.dietasMedRepository.save(createDietasMedDto);
  }

  async findAll(pacienteId: number) {
    return await this.dietasMedRepository.find({
      where: {paciente: {id: pacienteId}},
      relations: ['paciente']
    });
  }


  async remove(id: number) {
    const dietas = await this.dietasMedRepository.findOneBy({id});
    if (!dietas) {
      throw new Error(`La dieta con ID ${id} no existe`);
  }
    return await this.dietasMedRepository.remove(dietas);
   }
}
