import { EditoraEntity } from 'src/editora/validacao/editora.entity';
import {Entity, 
        Column,
        CreateDateColumn,
        UpdateDateColumn,
        DeleteDateColumn,
        PrimaryGeneratedColumn,
        ManyToOne} 
        from 'typeorm';


@Entity({ name: 'livros' })
export class LivroEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'Titulo', length: 100, nullable: false }) 
  titulo: string;
  
  @Column({ name: 'autor', length: 70, nullable: false }) 
  autor: string;

  @Column({ name: 'isbn', nullable: false }) 
  isbn: number; 

  @Column({ name: 'ano', nullable: false }) 
  ano: number; 

  @ManyToOne(() => EditoraEntity, (editora) => editora.editora, {eager: true, cascade:true})
  editora: EditoraEntity;

  @CreateDateColumn ({ name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn ({ name: 'updated_at'})
  updatedAt: string;
  
  @DeleteDateColumn ({ name: 'deleted_at'})
  deletedAt: string;
}