import { IsOptional } from "class-validator"

export class CreateReviewDto{
    user_id: number
    place_id: number
    description: string
    rating: number

    @IsOptional()
    user_name: string
}