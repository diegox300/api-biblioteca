import {
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';
import { EditoraEntity } from 'src/editora/validacao/editora.entity';

export class AtualizaLivroDTO {
  @IsNotEmpty({ message: 'O titulo não pode ser vazio' })
  @IsOptional()
  titulo: string;
  
  @MinLength(3, { message: 'O Autor precisa ter pelo menos 6 caracteres.' })
  @IsOptional()
  autor: string;

  @IsOptional()
  isbn: number;
  
  @IsOptional()
  ano: number;

  @IsOptional()
  editora: EditoraEntity;

}
