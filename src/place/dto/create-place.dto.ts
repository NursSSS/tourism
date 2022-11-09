import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsEnum, IsString, Length } from "class-validator"
import { Category, CategoryEn } from "../enum"


export class CreatePlaceDto{
    @ApiProperty({example: 'Бегемот'})
    @IsString()
    @Length(1, 40)
    name: string

    @ApiProperty({example: 'Точка быстрого питания'})
    @IsString()
    @Length(1, 800)
    description: string

    @ApiProperty({ example: 'place/begemot.jpg' })
    images: string

    @ApiProperty({example: 'https://bit.ly/3zb0wCR'})
    @IsString()
    address: string

    @ApiProperty({example: 'Еда'})
    category: Category

    @ApiProperty({ example: [{
        name: 'Begemot',
        desctription: 'Fast food',
        category: 'Foods'
    }]})
    @IsArray()
    en: [{
        place_id?: number
        name: string
        description: string
        category: CategoryEn
    }]
}