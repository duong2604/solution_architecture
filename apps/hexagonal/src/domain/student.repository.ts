import { Student } from './student.entity';

export interface StudentRepository {
  save(student: Student): Promise<void>;
  findByCode(code: string): Promise<Student | null>;
  findByEmail(email: string): Promise<Student | null>;
}

export const STUDENT_REPOSITORY = 'StudentRepository';
