import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivroController } from './livro.controller';
import { LivroRepository } from './livros.repository';
import { LivroService } from './livro.service';
import { LivroEntity } from './validacao/livro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LivroEntity])],
  controllers: [LivroController],
  providers: [LivroService, LivroRepository],
})
export class LivroModule {}
