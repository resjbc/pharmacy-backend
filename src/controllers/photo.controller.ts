import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/entitys/photo.entity';
import { IPhoto } from 'interfaces/photo.interface';
import { ValidationPipe } from '../pipes/validation.pipe';


@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll() {
    return this.photoService.findAll();
  }

  @Post('add')
  insertPhoto(@Body(new ValidationPipe()) body:Photo) {
    return this.photoService.insertPhoto(body);
  }
}