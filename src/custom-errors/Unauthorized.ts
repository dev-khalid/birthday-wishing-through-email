import BaseResponse from "./BaseResponse";

class Unauthorized extends BaseResponse {
  constructor(
    message: string = "You are not authorized to perform this action."
  ) {
    super(message, 401);
    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
}

export default Unauthorized;
