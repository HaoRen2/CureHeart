import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { ActiveUser } from '../common/decorators/active-user.decorator';
import { UserActiveInterface } from '../common/interfaces/user-active.interface';
import { Auth } from '../auth/decorators/auth.decorator';
import { RoleEnums } from '../common/enums/rol.enum';

@Controller('paciente')
export class PacienteController {
  
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pacienteService.findOne(id);
  }

  @Get('/email/:userEmail')
  findByEmail(@Param('userEmail') userEmail: string) {
    return this.pacienteService.findByEmail(userEmail);
  }

  @Get('/medico/:medicoId')
  findByMedicoId(@Param('medicoId') medicoId: number) {
    return this.pacienteService.getPacientesPorMedicoId(medicoId);
  }


  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteService.update(id, updatePacienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pacienteService.remove(id);
  }
  
}
