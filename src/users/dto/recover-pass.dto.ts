import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, Length } from "class-validator";

export class RecoverPassDto{
    @ApiProperty({example:'name@gmail.com', description:'to recover your password'})
    @IsEmail()
    email: string
    
    @ApiProperty({example:'shanks123'})
    @Length(4, 16, {message: 'no less 4 and no more 16 letters'})
    newPassword: string
}