import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListaLivroDTO } from "./dto/ListaLivro.dto";
import { LivroEntity } from "./validacao/livro.entity";
import { Repository } from "typeorm";
import { AtualizaLivroDTO } from "./dto/AtualizaLivro.dto";

@Injectable()
export class LivroService {
    constructor(
        @InjectRepository(LivroEntity)
        private readonly livroRepository: Repository<LivroEntity>
    ) {}

    async criarLivro(LivroEntity: LivroEntity) {
       return await this.livroRepository.save(LivroEntity);
    }

    async listaLivros() {
        const livrosSalvos = await this.livroRepository.find();
        const livrosLista = livrosSalvos.map(
        (livro) => new ListaLivroDTO(livro.id, livro.titulo, livro.editora)
        )

        return livrosLista;
    }

    async atualizaLivros(id: string, livroEntity: AtualizaLivroDTO) {
       return await this.livroRepository.update(id,livroEntity);
    }

    async deleteLivros(id: string) {
       return this.livroRepository.delete(id);
      }

      async getLivroId(id: string) {
      return await this.livroRepository.findOneBy({id: id})
      }
        
}