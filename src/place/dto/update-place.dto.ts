import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsArray, IsNumber, IsString, Length } from "class-validator"
import { Category, CategoryEn } from "../enum"

export class UpdatePlaceDto{
    @ApiProperty({ example: 12 })
    @IsNumber()
    id: number

    @ApiPropertyOptional({example: 'Wok лагман'})
    @IsString()
    name: string

    @ApiPropertyOptional({example: 'Точка быстрого питания'})
    @IsString()
    @Length(1, 800)
    description: string

    @ApiPropertyOptional({example: 'place/wok-lagman.jpg'})
    images: string

    @ApiPropertyOptional({example: 'https://bit.ly/3Drob4p'})
    address: string

    @ApiPropertyOptional({example: 'Еда'})
    category: Category

    @ApiPropertyOptional({ example: [{
        name: 'Wok lagman',
        desctription: 'Fast food',
        category: 'Foods'
    }]})
    @IsArray()
    en: [{
        name: string
        description: string
        category: CategoryEn
    }]
}