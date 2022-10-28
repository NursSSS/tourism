import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto';
import { ReviewEntity } from './entities';

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(ReviewEntity)
        private ReviewRepositry: Repository<ReviewEntity>,
        private UsersService: UsersService
    ){}

    async findAll(){
        return await this.ReviewRepositry.find()
    }

    async create(dto: CreateReviewDto){
        const user = await this.UsersService.findById(dto.user_id)
        dto.user_name = user.fullName
        
        return user
    }
}
