import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PlaceEntity } from 'src/place/entity';
import { PlaceModule } from 'src/place/place.module';
import { UsersModule } from 'src/users/users.module';
import { ReviewEntity } from './entities';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReviewEntity, PlaceEntity]), 
    UsersModule, PlaceModule, AuthModule
],
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService]
})
export class ReviewModule {}
