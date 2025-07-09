import { Test, TestingModule } from '@nestjs/testing';
import { HorarioMedicoService } from './horario-medico.service';

describe('HorarioMedicoService', () => {
  let service: HorarioMedicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HorarioMedicoService],
    }).compile();

    service = module.get<HorarioMedicoService>(HorarioMedicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
