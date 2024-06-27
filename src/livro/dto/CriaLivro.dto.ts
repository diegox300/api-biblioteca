import {
  IsNotEmpty,
} from 'class-validator';
import { EditoraEntity } from 'src/editora/validacao/editora.entity';
import { LivroEntity } from '../validacao/livro.entity';
import { ManyToOne } from 'typeorm';

export class CriaLivroDTO {
  @IsNotEmpty({ message: 'O titulo não pode ser vazio' })
  titulo: string;

  @IsNotEmpty({ message: 'O autor não pode ser vazio' })
  autor: string;

  @IsNotEmpty({ message: 'O ISBN não pode ser vazio' })
  isbn: number;

  @IsNotEmpty({ message: 'O ano não pode ser vazio' })
  ano: number;

  @IsNotEmpty ({ message: 'Editora não pode ser vazio'})
  editora: EditoraEntity;
}
