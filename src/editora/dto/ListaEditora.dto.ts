import { LivroEntity } from "src/livro/validacao/livro.entity";

export class ListaEditoraDTO {
    constructor(
        readonly id: string,
        readonly editora: string,
        readonly livros: LivroEntity[],
    ) {}
}