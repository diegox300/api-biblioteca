import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { CriaLivroDTO } from './dto/CriaLivro.dto';
import { LivroEntity } from './validacao/livro.entity';
import { v4 as uuid } from 'uuid';
import { ListaLivroDTO } from './dto/ListaLivro.dto';
import { AtualizaLivroDTO } from './dto/AtualizaLivro.dto';
import { LivroService } from './livro.service';

@Controller('/livros')
export class LivroController {
  constructor(
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
    livroEntity.editora = dadosDoLivro.editora;
    this.livroService.criarLivro(livroEntity);
    return { 
      livro: new ListaLivroDTO(livroEntity.id, livroEntity.titulo, livroEntity.editora),      
      message: 'Livro adicionado com sucesso.' };
    }
    
  @Get()
  async listLivro() {
    const livrosSalvos = await this.livroService.listaLivros();
   
    return livrosSalvos;
  }

  @Put('/:id')
  async atualizaLivro(@Param('id') id: string,@Body() novosDados: AtualizaLivroDTO){
  await this.livroService.atualizaLivros(id, novosDados);
  return {
      messagem: 'Livro Atualizado.',
    }
  }

  @Delete('/:id')
  async removeLivro(@Param('id') id: string){
  await this.livroService.deleteLivros(id);

    return {
      messagem: 'Livro Removido com Sucesso',
    }
  }

  @Get('/:id')
  async getLivroId(@Param('id') id: string) {
  return this.livroService.getLivroId(id);
  }

}
