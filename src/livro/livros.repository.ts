import { Injectable } from '@nestjs/common';
import {  LivroEntity } from './validacao/livro.entity';

@Injectable()
export class LivroRepository {
  private livros: LivroEntity[] = [];

  async salvar(livro: LivroEntity) {
    this.livros.push(livro);
  }

  async listar() {
    return this.livros;
  }
  
//  private buscaPorId(id: string) {
//  const possivelUsuario = this.usuarios.find(
//    usuarioSalvo => usuarioSalvo.id === id
//  );
//  if(!possivelUsuario) {
//    throw new Error('Usuário não existe.');
//    
//  }
//  return possivelUsuario;
//}
 // async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
 //     const usuario = this.buscaPorId(id)
    
 //     Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
//        if(chave === 'id'){
//          return;
//        }

//        usuario[chave] = valor;
 //     });
 //     return usuario;
 //   }

    // async remove(id: string) {
    //  const usuario = this.buscaPorId(id);
    //  this.usuarios = this.usuarios.filter(
    //   usuarioSalvo => usuarioSalvo.id !== id 
    //  );
    //  return usuario;
    // } 
  }
