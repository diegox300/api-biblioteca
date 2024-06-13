import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;
  
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  @IsOptional()
  senha: string;
}
