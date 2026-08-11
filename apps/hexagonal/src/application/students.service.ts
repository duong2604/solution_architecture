// application/students.service.ts
import { Inject, Injectable, ConflictException } from '@nestjs/common';
import { Student } from '../domain/student.entity';
import type { StudentRepository } from '../domain/student.repository';
import { STUDENT_REPOSITORY } from '../domain/student.repository';
import { v4 as uuidv4 } from 'uuid';

// Input của use case — do TẦNG APPLICATION tự định nghĩa (KHÔNG dùng DTO của presentation)
export interface CreateStudentInput {
  name: string;
  email: string;
}

@Injectable()
export class StudentsService {
  constructor(
    @Inject(STUDENT_REPOSITORY)
    private readonly students: StudentRepository,
  ) {}

  async create(input: CreateStudentInput): Promise<Student> {
    if (await this.students.findByEmail(input.email))
      throw new ConflictException(`Email ${input.email} đã được dùng`);

    const student = Student.create({
      id: `HS${uuidv4().slice(0, 7)}`,
      code: `HS${uuidv4().slice(0, 7).toUpperCase()}`,
      ...input,
    });
    await this.students.save(student);
    return student;
  }
}
