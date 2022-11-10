import { Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceEntity } from 'src/place/entity';
import { PlaceService } from 'src/place/place.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateReviewDto, UpdateReviewDto } from './dto';
import { ReviewEntity } from './entities';

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(ReviewEntity)
        private ReviewRepositry: Repository<ReviewEntity>,
        @InjectRepository(PlaceEntity)
        private PlaceRepositry: Repository<PlaceEntity>,
        private UsersService: UsersService,
        private PlaceService: PlaceService
    ){}

    async findAll(){
        return await this.ReviewRepositry.find()
    }

    async create(lang: string, dto: CreateReviewDto){
        const user = await this.UsersService.findById(dto.user_id)
        const place = await this.PlaceService.findById(lang, dto.place_id)
        dto.user_name = user.fullName

        place.rating_avg = await this.rating_avg(place.id, dto.rating)

        await this.PlaceRepositry.save(place)
        return await this.ReviewRepositry.save(dto)
    }

    async findById(id: number){
        const review = await this.ReviewRepositry.findOne({
            where: {
                id: id
            }
        })

        if(!review){
            throw new NotFoundException('Review is not found')
        }

        return review
    }

    async findByPlaceId(id: number){
        const all = await this.findAll()
        const review = all.filter((i) => i.place_id == +id)

        return review
    }

    async rating_avg(id: number, rating: number){
        const review = await this.findByPlaceId(id)
        if(review.length == 0){
            return 0
        }
        let result = review.reduce((sum, curr) => {
            return sum + curr.rating
        }, 0)

        result = +result + +rating
        result = +result / (+review.length + 1)
        result = +result.toFixed(1)

        console.log(result)
        return +result
    }

    async update(dto: UpdateReviewDto){
        const review = await this.findById(dto.id)

        Object.assign(review, dto)
        return await this.ReviewRepositry.save(review)
    }

    async delete(id: number){
        const review = await this.findById(id)

        await this.ReviewRepositry.delete(id)
        return { message: 'Review sucessfully deleted' }
    }
}
