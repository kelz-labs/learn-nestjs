import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  // validation rules using class-validator
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
