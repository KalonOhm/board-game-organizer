export class User {
  constructor (
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date,
  ) {}

  public get token(): string {
    // validation to ensure the user login token has an expiration date, which exists, and is not past the current date (expired)
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) return "";
    return this._token;
  }
}
