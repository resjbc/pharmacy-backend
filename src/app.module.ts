import { Module } from '@nestjs/common';
import { AppController } from 'controllers/app.controller';
import { AppService } from 'services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelsModule } from './models/model.module';
import { JwtAuthenService } from 'services/jwt-authen.service';


@Module({
  imports: [TypeOrmModule.forRoot(),ModelsModule],
  controllers: [AppController],
  providers: 
  [
    AppService
  ],
})
export class AppModule {}
