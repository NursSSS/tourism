import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString, Length, Max, Min } from "class-validator"

export class CreateReviewDto{
    @ApiProperty()
    @IsNumber()
    user_id: number

    @ApiProperty()
    @IsNumber()
    place_id: number

    @ApiProperty()
    @IsString()
    @Length(0, 200)
    description: string

    @ApiProperty()
    @Min(1)
    @Max(5) 
    rating: number

    @IsOptional()
    user_name?: string
}