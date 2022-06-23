export default class AuthError {
  public errorMessage: string;
  errorCode: string;
  status: number;
  email?: string;

  constructor(
    errorMessage: string,
    errorCode: string,
    status: number,
    email?: string
  ) {
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
    this.status = status;
    this.email = email;
  }
}
