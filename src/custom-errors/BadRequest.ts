import BaseResponse from "./BaseResponse";

class BadRequest extends BaseResponse {
  constructor(message: string = "Bad request. Please try to fill up all the requirements.") {
    super(message, 400);
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}

export default BadRequest;
