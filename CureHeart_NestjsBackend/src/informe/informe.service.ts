import { Injectable } from '@nestjs/common';
import { UpdateInformeDto } from './dto/update-informe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Informe } from './entities/informe.entity';
import { CreateInformeDto } from './dto/create-informe.dto';


@Injectable()
export class InformeService {

  constructor(@InjectRepository(Informe)
  private informeRepository: Repository<Informe>){}

  async getFileById(id: number): Promise<Informe> {
    return await this.informeRepository.findOneBy({id});
  }

  async getFileByPacienteId(pacienteId: number): Promise<Informe[]> {
    return await this.informeRepository.find({
      where: { paciente: { id: pacienteId } },
      relations: ['paciente'],
    });
  }

  async savePdf(informe: CreateInformeDto) {
    return await this.informeRepository.save(informe);
  }


}
