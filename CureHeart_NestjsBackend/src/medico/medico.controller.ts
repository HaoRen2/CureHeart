import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { RoleEnums } from '../common/enums/rol.enum';

@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Post()
  create(@Body() createMedicoDto: CreateMedicoDto) {
    return this.medicoService.create(createMedicoDto);
  }

  @Get()
  findAll() {
    return this.medicoService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: number) {
    return this.medicoService.findOne(id);
  }

  @Get('email/:userEmail')
  findOneByEmail(@Param('userEmail') userEmail: string) {
    return this.medicoService.findByEmail(userEmail);
  }

  @Get('especialidad/:especialidad')
  findByEspecialidad(@Param('especialidad') especialidad:string){
    return this.medicoService.findMedicoByEspecialidad(especialidad);
  }

  @Get('especialidades')
  async getUniqueEspecialidades(){
    return await this.medicoService.getUniqueEspecialidades();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMedicoDto: UpdateMedicoDto) {
    return this.medicoService.update(id, updateMedicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.medicoService.remove(id);
  }
}
