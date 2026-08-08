// presentation/dto/create-student.dto.ts — kiểm HÌNH DẠNG ở biên HTTP
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString() @IsNotEmpty() code!: string;
  @IsString() @IsNotEmpty() name!: string;
  @IsEmail() email!: string;
}
