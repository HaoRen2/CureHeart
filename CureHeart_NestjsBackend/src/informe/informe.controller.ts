import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { InformeService } from './informe.service';
import { UpdateInformeDto } from './dto/update-informe.dto';
import { Response } from 'express';
import { CreateInformeDto } from './dto/create-informe.dto';
import { Buffer } from 'buffer';

@Controller('informe')
export class InformeController {
  constructor(private readonly informeService: InformeService) {}

  @Post('upload')
  async create(@Body() informe: CreateInformeDto) {
    return this.informeService.savePdf(informe);
  }

  @Get(':id/download')
  async downloadInforme(@Param('id') id: number, @Res() res: Response) {
    const informe = await this.informeService.getFileById(id);

    // Decodificar la cadena Base64 en un Buffer
    const buffer = Buffer.from(informe.datos.toString(), 'base64');

    // Establece los encabezados de la respuesta
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=informe_${id}.pdf`);

    // Envía el Buffer como respuesta
    res.send(buffer);
  }

  @Get('paciente/:pacienteId')
  async findByPacienteId(@Param('pacienteId') pacienteId: number) {
    return this.informeService.getFileByPacienteId(pacienteId);
  }

}
