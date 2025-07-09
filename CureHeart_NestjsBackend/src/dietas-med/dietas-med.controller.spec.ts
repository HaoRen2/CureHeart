import { Test, TestingModule } from '@nestjs/testing';
import { DietasMedController } from './dietas-med.controller';
import { DietasMedService } from './dietas-med.service';

describe('DietasMedController', () => {
  let controller: DietasMedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DietasMedController],
      providers: [DietasMedService],
    }).compile();

    controller = module.get<DietasMedController>(DietasMedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
