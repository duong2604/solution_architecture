// infrastructure/in-memory-student.repository.ts
import { Injectable } from '@nestjs/common';
import { Student } from '../domain/student.entity';
import { StudentRepository } from '../domain/student.repository';

@Injectable()
export class InMemoryStudentRepository implements StudentRepository {
  private readonly store = new Map<string, Student>();

  async save(s: Student): Promise<void> {
    await Promise.resolve().then(() => setTimeout(() => {}, 0));
    this.store.set(s.id, s);
  }

  async findByCode(code: string): Promise<Student | null> {
    await Promise.resolve().then(() => setTimeout(() => {}, 0));
    const c = code.trim().toUpperCase();
    return [...this.store.values()].find((s) => s.code === c) ?? null;
  }
  async findByEmail(email: string): Promise<Student | null> {
    await Promise.resolve().then(() => setTimeout(() => {}, 0));
    const e = email.trim().toLowerCase();
    return [...this.store.values()].find((s) => s.email.value === e) ?? null;
  }

  async findAll(): Promise<Student[]> {
    await Promise.resolve().then(() => setTimeout(() => {}, 0));
    return [...this.store.values()];
  }
}
