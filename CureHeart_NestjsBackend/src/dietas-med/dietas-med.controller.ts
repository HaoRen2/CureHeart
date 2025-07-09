import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DietasMedService } from './dietas-med.service';
import { CreateDietasMedDto } from './dto/create-dietas-med.dto';

@Controller('dietas-med')
export class DietasMedController {
  constructor(private readonly dietasMedService: DietasMedService) {}

  @Post()
  create(@Body() createDietasMedDto: CreateDietasMedDto) {
    return this.dietasMedService.create(createDietasMedDto);
  }

  @Get('paciente/:pacienteId')
  findAll(@Param('pacienteId') pacienteId: number) {
    return this.dietasMedService.findAll(pacienteId);
  }


  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.dietasMedService.remove(id);
  }


}
