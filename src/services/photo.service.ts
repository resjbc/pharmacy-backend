import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from '../models/entitys/photo.entity';
import { validate } from 'class-validator';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll() {
    return await this.photoRepository.find();
  }

  async insertPhoto(photo: Photo) {
    

    return photo;
  }

   
    
  
}