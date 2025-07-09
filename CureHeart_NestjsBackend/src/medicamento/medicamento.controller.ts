import { Controller, Get, Param } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';


@Controller('medicamento')
export class MedicamentoController {
  constructor(private readonly medicamentoService: MedicamentoService) {}

  @Get()
  findAll() {
    return this.medicamentoService.findAll();
  }

  @Get(':name')
  findByName(@Param('name') name: string) {
    return this.medicamentoService.findByName(name);
  }


}
