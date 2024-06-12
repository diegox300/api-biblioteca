import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { LivroRepository } from './livros.repository';
import { CriaLivroDTO } from './dto/CriaLivro.dto';
import { LivroEntity } from './validacao/livro.entity';
import { v4 as uuid } from 'uuid';
import { ListaLivroDTO } from './dto/ListaLivro.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { LivroService } from './livro.service';

@Controller('/livros')
export class LivroController {
  constructor(
    private livroRepository: LivroRepository,
    private livroService: LivroService
  ) {}

  @Post()
  async criaLivro(@Body() dadosDoLivro: CriaLivroDTO) {
    const livroEntity = new LivroEntity();
    livroEntity.titulo = dadosDoLivro.titulo;
    livroEntity.autor = dadosDoLivro.autor;
    livroEntity.isbn = dadosDoLivro.isbn;
    livroEntity.ano = dadosDoLivro.ano;
    livroEntity.id = uuid();
    this.livroService.criarLivro(livroEntity);
    return { 
      livro: new ListaLivroDTO(livroEntity.id, livroEntity.titulo), 
      message: 'Livro adicionado com sucesso.' };
    }
  @Get()
  async listLivro() {
    const livrosSalvos = await this.livroService.listaLivros();
   
    return livrosSalvos;
  }
}
