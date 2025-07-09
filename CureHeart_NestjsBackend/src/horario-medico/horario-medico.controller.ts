import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HorarioMedicoService } from './horario-medico.service';
import { CreateHorarioMedicoDto } from './dto/create-horario-medico.dto';
import { UpdateHorarioMedicoDto } from './dto/update-horario-medico.dto';

@Controller('horario-medico')
export class HorarioMedicoController {
  constructor(private readonly horarioMedicoService: HorarioMedicoService) {}

  @Post()
  create(@Body() createHorarioMedicoDto: CreateHorarioMedicoDto) {
    return this.horarioMedicoService.create(createHorarioMedicoDto);
  }

  @Get()
  findAll() {
    return this.horarioMedicoService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: number, @Body() updateHorarioMedicoDto: UpdateHorarioMedicoDto) {
    return this.horarioMedicoService.update(id, updateHorarioMedicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.horarioMedicoService.remove(id);
  }
}
