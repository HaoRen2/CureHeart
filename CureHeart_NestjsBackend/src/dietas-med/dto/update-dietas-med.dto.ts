import { PartialType } from '@nestjs/mapped-types';
import { CreateDietasMedDto } from './create-dietas-med.dto';

export class UpdateDietasMedDto extends PartialType(CreateDietasMedDto) {}
