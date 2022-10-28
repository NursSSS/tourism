import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { ReviewEntity } from './entities';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity]), UsersModule, forwardRef(() => AuthModule)],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule {}
