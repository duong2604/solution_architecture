import { Email } from './value-objects/email.vo';

export type StudentStatus = 'ACTIVE' | 'GRADUATED';

export class Student {
  constructor(
    private readonly _id: string,
    private readonly _code: string,
    private _name: string,
    private _email: Email,
    private _status: StudentStatus,
  ) {}

  static create(p: {
    id: string;
    code: string;
    name: string;
    email: string;
    status?: string;
  }): Student {
    return new Student(p.id, p.code, p.name, Email.create(p.email), 'ACTIVE');
  }

  get id(): string {
    return this._id;
  }

  get code(): string {
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
