import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditoraService } from './editora.service';
import { EditoraEntity } from './validacao/editora.entity';
import { EditoraController } from './editora.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EditoraEntity])],
  controllers: [EditoraController],
  providers: [EditoraService],
})
export class EditoraModule {}
