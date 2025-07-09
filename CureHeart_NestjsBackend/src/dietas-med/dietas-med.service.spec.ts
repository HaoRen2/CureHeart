import { Test, TestingModule } from '@nestjs/testing';
import { DietasMedService } from './dietas-med.service';

describe('DietasMedService', () => {
  let service: DietasMedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DietasMedService],
    }).compile();

    service = module.get<DietasMedService>(DietasMedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
