import { Email } from './value-objects/email.vo';
import { StudentCode } from './value-objects/student-code.vo';

export type StudentStatus = 'ACTIVE' | 'GRADUATED';

export class Student {
  constructor(
    private readonly _id: string,
    private readonly _code: StudentCode,
    private _name: string,
    private _email: Email,
    private _status: StudentStatus,
  ) {}

  static create(p: {
    id: string;
    code: string;
    name: string;
    email: string;
    status: string;
  }): Student {
    return new Student(
      p.id,
      StudentCode.create(p.code),
      p.name,
      Email.create(p.email),
      'ACTIVE',
    );
  }

  get id(): string {
    return this._id;
  }

  get code(): StudentCode {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  get email(): Email {
    return this._email;
  }

  get status(): StudentStatus {
    return this._status;
  }
}
