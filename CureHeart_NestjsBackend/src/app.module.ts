import { Module } from '@nestjs/common';
import { PacienteModule } from './paciente/paciente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicoModule } from './medico/medico.module';
import { CitasModule } from './citas/citas.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MedicamentoModule } from './medicamento/medicamento.module';
import { DietasMedModule } from './dietas-med/dietas-med.module';
import { InformeModule } from './informe/informe.module';
import { HorarioMedicoModule } from './horario-medico/horario-medico.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'lei',
        password: 'root',
        database: 'db_hospital',
        autoLoadEntities: true,
        synchronize: true,
      }
    ),

    PacienteModule,
    MedicoModule,
    CitasModule,
    UsersModule,
    AuthModule,
    MedicamentoModule,
    DietasMedModule,
    InformeModule,
    HorarioMedicoModule

    ],

  controllers: [],
  providers: [],
})
export class AppModule {}
