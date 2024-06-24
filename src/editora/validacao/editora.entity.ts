import {Entity, 
        Column,
        CreateDateColumn,
        UpdateDateColumn,
        DeleteDateColumn,
        PrimaryGeneratedColumn} 
        from 'typeorm';


@Entity({ name: 'Editora' }) // tabela
export class EditoraEntity { 

  @PrimaryGeneratedColumn('uuid')
  id: string; //campo

  @Column({ name: 'Editora', length: 100, nullable: false }) // coluna
  editora: string;

  @CreateDateColumn ({ name: 'created_at'}) // coluna
  createdAt: string;

  @UpdateDateColumn ({ name: 'updated_at'}) // coluna
  updatedAt: string;
  
  @DeleteDateColumn ({ name: 'deleted_at'}) // coluna
  deletedAt: string;
}