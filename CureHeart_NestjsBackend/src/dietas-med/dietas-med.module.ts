import { Module } from '@nestjs/common';
import { DietasMedService } from './dietas-med.service';
import { DietasMedController } from './dietas-med.controller';
import { DietasMed } from './entities/dietas-med.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DietasMed])],
  controllers: [DietasMedController],
  providers: [DietasMedService],
})
export class DietasMedModule {}
