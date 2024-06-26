import { Module } from '@nestjs/common';
import { LivroModule } from './livro/livro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { EditoraModule } from './editora/editora.module';

@Module({
  imports: [
    LivroModule, EditoraModule, 
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    })
  ],
})
export class AppModule {}
