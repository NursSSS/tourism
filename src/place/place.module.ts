import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { PlaceEnEntity, PlaceEntity,  } from './entity';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceEntity, PlaceEnEntity]), UsersModule],
  controllers: [PlaceController],
  providers: [PlaceService]
})
export class PlaceModule {}
