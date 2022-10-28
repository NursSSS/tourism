import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PlaceController } from 'src/place/place.controller';
import { UsersModule } from 'src/users/users.module';
import { ReviewEntity } from './entities';
import { ReviewService } from './review.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity]), UsersModule, forwardRef(() => AuthModule)],
  controllers: [PlaceController],
  providers: [ReviewService]
})
export class ReviewModule {}
