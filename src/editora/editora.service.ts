import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EditoraEntity } from "./validacao/editora.entity";
import { ListaEditoraDTO } from "./dto/ListaEditora.dto";

@Injectable()
export class EditoraService {
    constructor(
        @InjectRepository(EditoraEntity)
        private readonly editoraRepository: Repository<EditoraEntity>
    ) {}

    async listaEditora() {
        const editoraSalvos = await this.editoraRepository.find();
        const editoraLista = editoraSalvos.map(
        (editora) => new ListaEditoraDTO(editora.id, editora.editora, editora.livros)
        )

        return editoraLista;
    }
    async criarEditora(EditoraEntity: EditoraEntity) {
        await this.editoraRepository.save(EditoraEntity);
    }
    
}