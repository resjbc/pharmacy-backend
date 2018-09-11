import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from '../models/entitys/photo.entity';


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
    const photoInsert = await this.photoRepository.insert(photo);
    console.log(photoInsert.raw[0].id);
    return photoInsert;
  }

   
    
  
}