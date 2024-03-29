import { Controller, Get, Post, Put, Body, Param, Delete, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guard/role-guard';
import { UserRole } from 'src/users/entities';
import { Role } from 'src/users/entities/role-decorator';
import { CreatePlaceDto, UpdatePlaceDto } from './dto';
import { PlaceEntity } from './entity';
import { PlaceService } from './place.service';

@ApiBearerAuth()
@ApiTags('place')
@Controller(':lang/place')
export class PlaceController {
    constructor(private PlaceService: PlaceService){}

    @Get()
    @ApiOkResponse({ type: PlaceEntity })
    @ApiForbiddenResponse({ description: 'No access' })
    @ApiUnauthorizedResponse({ description: 'User is not registered'})
    @Role(UserRole.SUPERADMIN, UserRole.ADMIN)
    @UseGuards(RoleGuard)
    @UseGuards(JwtAuthGuard)
    async findAll(){
        return await this.PlaceService.findAll()
    }

    @Post()
    @ApiCreatedResponse({ type: PlaceEntity })
    @ApiForbiddenResponse({ description: 'No access' })
    @Role(UserRole.SUPERADMIN, UserRole.ADMIN)
    @UseGuards(RoleGuard)
    @UseGuards(JwtAuthGuard)
    async create(@Body() dto: CreatePlaceDto){
        return await this.PlaceService.createPlace(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/en')
    async findAllEn(){
        return await this.PlaceService.findAllEn()
    }

    @Get('findById/:id')
    @ApiOkResponse({ type: PlaceEntity })
    @ApiNotFoundResponse({ description: 'Place is not found' })
    async findById(@Param('lang') lang: string, @Param('id') id: number){
        return await this.PlaceService.findById(lang, id)
    }

    @Get('findByName/:name')
    @ApiOkResponse({ type: PlaceEntity })
    @ApiNotFoundResponse({ description: 'Place is not found' })
    async findByName(@Param('lang') lang: string, @Param('name') name: string){
        return await this.PlaceService.findByName(lang, name)
    }

    @Put()
    @ApiOkResponse({ type: PlaceEntity })
    @ApiNotFoundResponse({ description: 'Place is not found' })
    @ApiForbiddenResponse({ description: 'No access' })
    @Role(UserRole.SUPERADMIN, UserRole.ADMIN)
    @UseGuards(RoleGuard)
    @UseGuards(JwtAuthGuard)
    async update(@Body() dto: UpdatePlaceDto){
        return await this.PlaceService.update(dto)
    }

    @Delete(':id')
    @ApiResponse({
        status: 204,
        description: 'Place is sucessfully deleted'
    })
    @ApiNotFoundResponse({ description: 'Place is not found' })
    @ApiForbiddenResponse({ description: 'No access' })
    @Role(UserRole.SUPERADMIN, UserRole.ADMIN)
    @UseGuards(RoleGuard)
    @UseGuards(JwtAuthGuard)
    async delete(@Param('id') id: number){
        return await this.PlaceService.delete(id)
    }
}
