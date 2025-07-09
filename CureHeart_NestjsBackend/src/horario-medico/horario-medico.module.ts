import { Module } from '@nestjs/common';
import { HorarioMedicoService } from './horario-medico.service';
import { HorarioMedicoController } from './horario-medico.controller';
import { HorarioMedico } from './entities/horario-medico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HorarioMedico])],
  controllers: [HorarioMedicoController],
  providers: [HorarioMedicoService],
})
export class HorarioMedicoModule {}
