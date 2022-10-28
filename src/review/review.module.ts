import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceController } from 'src/place/place.controller';
import { UsersModule } from 'src/users/users.module';
import { ReviewEntity } from './entities';
import { ReviewService } from './review.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity]), UsersModule],
  controllers: [PlaceController],
  providers: [ReviewService]
})
export class ReviewModule {}
