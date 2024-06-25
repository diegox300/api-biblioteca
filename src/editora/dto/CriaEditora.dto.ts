import {
  IsNotEmpty,
} from 'class-validator';

export class CriaEditoraDTO {
  @IsNotEmpty({ message: 'A Editora não pode ser vazio' })
  editora: string;

}
