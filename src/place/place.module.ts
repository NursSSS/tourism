import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PlaceEnEntity, PlaceEntity,  } from './entity';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlaceEntity, PlaceEnEntity]), AuthModule
  ],
  controllers: [PlaceController],
  providers: [PlaceService],
  exports: [PlaceService]
})
export class PlaceModule {}
