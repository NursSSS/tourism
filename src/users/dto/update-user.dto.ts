import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsEmail, IsNumber, IsNumberString, IsString, Length, Max, Min } from "class-validator"

export class UpdateUserDto{
    @ApiProperty()
    @IsNumber()
    id: number

    @ApiPropertyOptional({example: 'yourname@gmail.com'})
    @IsEmail()
    email: string

    @ApiPropertyOptional({example: 'islam azamatov'})
    @IsString()
    @Length(1, 30)
    name: string

    @ApiPropertyOptional({example: '556335577'})
    @IsNumberString()
    @Min(9)
    @Max(9)
    phoneNumber: string
    
    @ApiPropertyOptional({example: 'user123'})
    @Length(4, 16, {message: 'no less 4 and no more 16 letters'})
    password: string
 
    @ApiPropertyOptional({example: 'https://bit.ly/3Csmz8Q'})
    avatar: string
}