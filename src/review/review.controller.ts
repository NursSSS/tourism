import { Controller, Body, Post, Get, Param, Put, UseGuards, Delete } from '@nestjs/common';
import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guard/role-guard';
import { UserRole } from 'src/users/entities';
import { Role } from 'src/users/entities/role-decorator';
import { CreateReviewDto, UpdateReviewDto } from './dto';
import { ReviewEntity } from './entities';
import { ReviewService } from './review.service';

@ApiBearerAuth()
@ApiTags('Review')
@Controller(':lang/review')
export class ReviewController {
    constructor(private ReviewService: ReviewService){}

    @Get()
    @ApiOkResponse({ type: ReviewEntity })
    @ApiForbiddenResponse({ description: 'No access' })
    @Role(UserRole.SUPERADMIN, UserRole.ADMIN)
    @UseGuards(RoleGuard)
    @UseGuards(JwtAuthGuard)
    async findAll(){
        return await this.ReviewService.findAll()
    }

    @Post()
    @ApiOkResponse({ type: ReviewEntity })
    @ApiNotFoundResponse({ description: 'User is not found'})
    @ApiNotFoundResponse({ description: 'Place is not found'})
    @UseGuards(JwtAuthGuard)
    async create(@Param('lang') lang: string, @Body() dto: CreateReviewDto){
        return await this.ReviewService.create(lang, dto)
    }

    @Get('findById/:id')
    @ApiOkResponse({ type: ReviewEntity })
    @ApiNotFoundResponse({ description: 'Review is not found'})
    async findById(@Param('id') id: number){
        return await this.ReviewService.findById(id)
    }

    
    @Get('findByPlaceId/:id')
    @ApiOkResponse({ type: ReviewEntity })
    async findByPlaceId(@Param('id') id: number){
        return await this.ReviewService.findById(id)
    }

    @Put()
    @ApiOkResponse({ type: ReviewEntity })
    @ApiNotFoundResponse({ description: 'Review is not found'})
    @UseGuards(JwtAuthGuard)
    async update(@Body() dto: UpdateReviewDto){
        return await this.ReviewService.update(dto)
    }

    @Delete(':id')
    @ApiResponse({
        status: 204,
        description: 'Review is sucessfully deleted'
    })
    @ApiNotFoundResponse({ description: 'Review is not found'})
    @UseGuards(JwtAuthGuard)
    async delete(@Param('id') id: number){
        return await this.ReviewService.delete(id)
    }
}
