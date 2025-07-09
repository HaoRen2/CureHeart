import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { CitasService } from '../citas/citas.service';
import { CitasModule } from '../citas/citas.module';
import { InformeModule } from '../informe/informe.module';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente]),CitasModule, InformeModule],
  controllers: [PacienteController],
  providers: [PacienteService, CitasService],
})
export class PacienteModule {}
