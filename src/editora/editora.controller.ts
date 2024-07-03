import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EditoraService } from './editora.service';
import { CriaEditoraDTO } from './dto/CriaEditora.dto';
import { EditoraEntity } from './validacao/editora.entity';
import { ListaEditoraDTO } from './dto/ListaEditora.dto';
import { v4 as uuid } from 'uuid';
import { AtualizaEditoraDTO } from './dto/AtualizaEditora.dto';

@Controller('/editora')
export class EditoraController {
  constructor(
    private editoraService: EditoraService
  ) {}

  @Get()
  async listEditora() {
    const editoraSalvos = await this.editoraService.listaEditora();
    return editoraSalvos;
  }

  @Post()
  async criaEditora(@Body() dadosDoEditora: CriaEditoraDTO) {
    const editoraEntity = new EditoraEntity();
    editoraEntity.editora = dadosDoEditora.editora
    editoraEntity.id = uuid();
    this.editoraService.criarEditora(editoraEntity);
    return { 
      livro: new ListaEditoraDTO(editoraEntity.id, editoraEntity.editora), 
      message: 'Editora adicionado com sucesso.' };
    }

  @Put('/:id')
  async atualizaEditora(@Param('id') id: string,@Body() novosDados: AtualizaEditoraDTO){
    console.log(novosDados)
    const editoraAtualizado = await this.editoraService.atualizaEditora(id, novosDados);
   
    return {
      editoraAtualizado,
      novosDados,
      messagem: 'Editora Atualizado com Sucesso',
    }
  }

  @Delete('/:id')
  async removeEditora(@Param('id') id: string){
    const editoraRemovido = await this.editoraService.deleteEditora(id);

    return {
      livro: editoraRemovido,
      messagem: 'Editora Removida com Sucesso',
    }
  }

  @Get('/:id')
  async getEditoraId(@Param('id') id: string) {
 return await this.editoraService.getEditoraId(id);
}

}
