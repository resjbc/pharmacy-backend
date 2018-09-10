import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entitys/photo.entity';
import { PhotoService } from '../services/photo.service';
import { PhotoController } from '../controllers/photo.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}