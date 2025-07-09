import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post()
  create(@Body() createCitaDto: CreateCitaDto) {
    return this.citasService.create(createCitaDto);
  }

  @Get('paciente/:id')
  findAllPaciente(@Param('id') id: number) {
    return this.citasService.findAllPaciente(id);
  }

  @Get('medico/:id')
  findAllMedico(@Param('id') id: number) {
    return this.citasService.findAllMedico(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.citasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCitaDto: UpdateCitaDto) {
    return this.citasService.update(id, updateCitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.citasService.remove(id);
  }
}
