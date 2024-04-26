import BaseResponse from "./BaseResponse";

class Forbidden extends BaseResponse {
  constructor(message: string = 'You are not allowed to access this.') {
    super(message, 403);
    Object.setPrototypeOf(this, Forbidden.prototype);
  }
}

export default Forbidden;
