import BaseResponse from "./BaseResponse";

class NotFound extends BaseResponse {
  constructor(message: string = 'Not Found!') {
    super(message, 404);
    Object.setPrototypeOf(this, NotFound.prototype);
  }
}

export default NotFound;
