// domain/value-objects/email.vo.ts
export class Email {
  private constructor(public readonly value: string) {}

  static create(raw: string): Email {
    const v = raw?.trim().toLowerCase() ?? '';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      throw new Error(`Email không hợp lệ: "${raw}"`);
    }
    return new Email(v);
  }
  equals(o: Email): boolean {
    return this.value === o.value;
  }
}
