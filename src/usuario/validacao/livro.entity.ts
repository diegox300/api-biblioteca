import {Entity, 
        Column,
        CreateDateColumn,
        UpdateDateColumn,
        DeleteDateColumn,
        PrimaryGeneratedColumn} 
        from 'typeorm';


@Entity({ name: 'livros' }) // tabela
export class LivroEntity { 

  @PrimaryGeneratedColumn('uuid')
  id: string; //campos

  @Column({ name: 'Titulo', length: 100, nullable: false }) // coluna
  titulo: string;
  
  @Column({ name: 'autor', length: 70, nullable: false }) // coluna
  autor: string;

  @Column({ name: 'isbn', length: 255, nullable: false }) // coluna
  isbn: number; // coluna

  @Column({ name: 'ano', nullable: false }) // coluna
  ano: number; // coluna

  @CreateDateColumn ({ name: 'created_at'}) // coluna
  createdAt: string;

  @UpdateDateColumn ({ name: 'updated_at'}) // coluna
  updatedAt: string;
  
  @DeleteDateColumn ({ name: 'deleted_at'}) // coluna
  deletedAt: string;
}