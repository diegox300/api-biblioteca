import { EditoraEntity } from "src/editora/validacao/editora.entity";

export class ListaLivroDTO {
    constructor(
        readonly id: string,
        readonly titulo: string,
        readonly editora: EditoraEntity,
    ) {}
}