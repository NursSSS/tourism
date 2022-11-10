import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString, Length, Max, Min } from "class-validator"

export class UpdateReviewDto{
    @ApiProperty()
    @IsNumber()
    id: number

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(5)
    rating: number

    @ApiProperty()
    @IsString()
    @Length(0, 200)
    description: string
}