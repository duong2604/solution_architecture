// domain/value-objects/student-code.vo.ts
export class StudentCode {
  private constructor(public readonly value: string) {}

  static create(raw: string): StudentCode {
    const v = raw?.trim().toUpperCase() ?? '';
    if (!/^HS\d{7}$/.test(v)) {
      throw new Error(`Mã học sinh không hợp lệ: "${raw}" (mẫu: HS2024001)`);
    }
    return new StudentCode(v);
  }
  equals(o: StudentCode): boolean {
    return this.value === o.value;
  }
}
