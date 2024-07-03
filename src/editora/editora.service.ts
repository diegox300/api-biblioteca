import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EditoraEntity } from "./validacao/editora.entity";
import { ListaEditoraDTO } from "./dto/ListaEditora.dto";
import { AtualizaEditoraDTO } from "./dto/AtualizaEditora.dto";

@Injectable()
export class EditoraService {
    constructor(
        @InjectRepository(EditoraEntity)
        private readonly editoraRepository: Repository<EditoraEntity>
    ) {}

    async listaEditora() {
        const editoraSalvos = await this.editoraRepository.find();
        const editoraLista = editoraSalvos.map(
        (editora) => new ListaEditoraDTO(editora.id, editora.editora)
        )

        return editoraLista;
    }
    async criarEditora(EditoraEntity: EditoraEntity) {
        await this.editoraRepository.save(EditoraEntity);
    }

    async atualizaEditora(id: string, editoraEntity: AtualizaEditoraDTO) {
        await this.editoraRepository.update(id,editoraEntity);
     }

     async deleteEditora(id: string) {
       await this.editoraRepository.delete(id);
      }

      async getEditoraId(id: string) {
        return await this.editoraRepository.findOneBy({id: id});
      }
}