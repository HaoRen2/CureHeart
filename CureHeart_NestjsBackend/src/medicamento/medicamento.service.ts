import { Injectable } from '@nestjs/common';

import { Medicamento } from './entities/medicamento.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


//Guardar los medicamentos traido de un csv de la api cima;

@Injectable()
export class MedicamentoService {

  constructor(
    @InjectRepository(Medicamento)
    private readonly medicamentoRepository: Repository<Medicamento>,
  ) {
  }

  async findAll() {
    return await this.medicamentoRepository.find();
  }

  //Filtrar los diferentes medicamentos del base de datos segun su nombre
  async findByName(medicamento: string) {

    const query = this.medicamentoRepository.createQueryBuilder('medicamento');

      const words = medicamento.split(' ');
      words.forEach(word => {
        query.andWhere('LOWER(medicamento.medicamento) LIKE LOWER(:word)', { word: `%${word}%` });
      });


    return await query.getMany();

  }
}
