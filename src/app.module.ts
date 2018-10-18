import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelsModule } from './models/model.module';
import { typeOrmConfig } from './config';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),ModelsModule],
  controllers: [AppController],
  providers: 
  [
    AppService
  ],
})
export class AppModule {}
