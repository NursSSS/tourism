import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNumberString, IsString, Length, Max, Min } from "class-validator"
import { UserRole } from "../entities"

export class CreateUserDto{
    @ApiProperty({example: 'yourname@gmail.com'})
    @IsEmail()
    email: string

    @ApiProperty({example: 'islam azamatov'})
    @IsString()
    @Length(1, 30)
    fullName: string

    @ApiProperty({example: '556335577'})
    @IsNumberString()
    @Min(9)
    @Max(9)
    phoneNumber: string
    
    @ApiProperty({example: 'user123'})
    @Length(4,16, {message: 'mo less than 4 and no more than 16 letters'})
    password: string
    
    role?: UserRole
}