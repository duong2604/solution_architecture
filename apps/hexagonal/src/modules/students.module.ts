import { Module } from '@nestjs/common';
import { STUDENT_REPOSITORY } from '../domain/student.repository';
import { StudentsController } from '../presentation/student.controller';
import { StudentsService } from '../application/students.service';
import { InMemoryStudentRepository } from '../infrastructure/in-memory-student.repository';

@Module({
  controllers: [StudentsController],
  providers: [
    StudentsService,
    { provide: STUDENT_REPOSITORY, useClass: InMemoryStudentRepository },
  ],
})
export class StudentsModule {}
