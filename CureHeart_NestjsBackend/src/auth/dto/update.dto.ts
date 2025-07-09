import { IsOptional } from "class-validator";


export class UpdateDto {

    @IsOptional()
    password: string;

}