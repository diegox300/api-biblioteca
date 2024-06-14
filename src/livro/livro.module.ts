import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivroController } from './livro.controller';
import { LivroService } from './livro.service';
import { LivroEntity } from './validacao/livro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LivroEntity])],
  controllers: [LivroController],
  providers: [LivroService],
})
export class LivroModule {}
