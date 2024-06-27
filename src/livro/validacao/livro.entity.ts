import { EditoraEntity } from 'src/editora/validacao/editora.entity';
import {Entity, 
        Column,
        CreateDateColumn,
        UpdateDateColumn,
        DeleteDateColumn,
        PrimaryGeneratedColumn,
        ManyToOne,
        JoinColumn} 
        from 'typeorm';


@Entity({ name: 'livros' }) // tabela
export class LivroEntity { 

  @PrimaryGeneratedColumn('uuid')
  id: string; //campo

  @Column({ name: 'Titulo', length: 100, nullable: false }) // coluna
  titulo: string;
  
  @Column({ name: 'autor', length: 70, nullable: false }) // coluna
  autor: string;

  @Column({ name: 'isbn', nullable: false }) // coluna
  isbn: number; // coluna

  @Column({ name: 'ano', nullable: false }) // coluna
  ano: number; // coluna

  @ManyToOne(() => EditoraEntity, (editora) => editora.editora, {eager: true})
  editora: EditoraEntity;

  @CreateDateColumn ({ name: 'created_at'}) // coluna
  createdAt: string;

  @UpdateDateColumn ({ name: 'updated_at'}) // coluna
  updatedAt: string;
  
  @DeleteDateColumn ({ name: 'deleted_at'}) // coluna
  deletedAt: string;
}