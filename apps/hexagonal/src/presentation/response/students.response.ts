import { Student } from '../../domain/student.entity';

export interface StudentResponse {
  id: string;
  code: string;
  name: string;
  email: string;
  status: string;
}

export const toStudentResponse = (s: Student) => ({
  id: s.id,
  name: s.name,
  email: s.email.value,
  status: s.status,
  code: s.code,
});
