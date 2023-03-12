export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _hashedPassword: string
  ) {}

  get email() {
    return this._email;
  }
  get password() {
    return this._hashedPassword;
  }
  get name() {
    return this._name;
  }

  toHttp(){
      return {
        name: this.name,
        email: this.email,
        password: this.password
      }
  }
}
