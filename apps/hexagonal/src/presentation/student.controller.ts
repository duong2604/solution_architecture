// presentation/students.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from '../application/students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Body() dto: CreateStudentDto) {
    const s = await this.studentsService.create({
      name: dto.name,
      email: dto.email,
    });
    return {
      id: s.id,
      code: s.code,
      name: s.name,
      email: s.email.value,
      status: s.status,
    };
  }
}
