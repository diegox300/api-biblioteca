import { Controller, Get } from '@nestjs/common';
import { EditoraService } from './editora.service';

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
}
