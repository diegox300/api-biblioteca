import { Body, Controller, Get, Post } from '@nestjs/common';
import { EditoraService } from './editora.service';
import { CriaEditoraDTO } from './dto/CriaEditora.dto';
import { EditoraEntity } from './validacao/editora.entity';
import { ListaEditoraDTO } from './dto/ListaEditora.dto';
import { v4 as uuid } from 'uuid';

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

}
