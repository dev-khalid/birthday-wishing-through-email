class BaseResponse extends Error {
  public statusCode: number;
  public isOperational: boolean;
  constructor(
    message: string,
    statusCode = 500,
    isOperationalError: boolean = true
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.isOperational = isOperationalError; //this errors are being created by users...
    Object.setPrototypeOf(this, BaseResponse.prototype);
  }
}
export default BaseResponse;
