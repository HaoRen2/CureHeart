import { Module } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './entities/medico.entity';
import { CitasModule } from 'src/citas/citas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Medico]),CitasModule],
  controllers: [MedicoController],
  providers: [MedicoService],
})
export class MedicoModule {}
