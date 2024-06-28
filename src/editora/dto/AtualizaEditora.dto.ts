import {
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class AtualizaEditoraDTO {
  @IsNotEmpty({ message: 'A editora não pode ser vazio' })
  @IsOptional()
  editora: string;
  
}
