import { Test, TestingModule } from '@nestjs/testing';
import { HorarioMedicoController } from './horario-medico.controller';
import { HorarioMedicoService } from './horario-medico.service';

describe('HorarioMedicoController', () => {
  let controller: HorarioMedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorarioMedicoController],
      providers: [HorarioMedicoService],
    }).compile();

    controller = module.get<HorarioMedicoController>(HorarioMedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
