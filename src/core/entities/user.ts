export default class User {
    private _id: number;
    private _name: string;
    private _email: string;
    private _password: string;
    private _createdAt: Date;

    constructor(id: number, name: string, email: string, password: string, createdAt: Date) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
        this._createdAt = createdAt;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }
}