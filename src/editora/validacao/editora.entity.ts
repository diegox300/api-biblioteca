import { LivroEntity } from 'src/livro/validacao/livro.entity';
import {Entity, 
        Column,
        CreateDateColumn,
        UpdateDateColumn,
        DeleteDateColumn,
        PrimaryGeneratedColumn,
        OneToMany,
       } 
        from 'typeorm';


@Entity({ name: 'editora' }) // tabela
export class EditoraEntity { 

  @PrimaryGeneratedColumn('uuid')
  id: string; //campo

  @Column({ name: 'Editora', length: 100, nullable: false }) // coluna
  editora: string;

  @OneToMany(() => LivroEntity, (livros) => livros.titulo)
  livros: LivroEntity[]

  @CreateDateColumn ({ name: 'created_at'}) // coluna
  createdAt: string;

  @UpdateDateColumn ({ name: 'updated_at'}) // coluna
  updatedAt: string;
  
  @DeleteDateColumn ({ name: 'deleted_at'}) // coluna
  deletedAt: string;
}