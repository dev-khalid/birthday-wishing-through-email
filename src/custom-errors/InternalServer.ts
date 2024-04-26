import BaseResponse from "./BaseResponse";

class InternalServer extends BaseResponse {
  constructor(message: string = 'Internal Server Error') {
    super(message, 500);
    Object.setPrototypeOf(this, InternalServer.prototype);
  }
}

export default InternalServer;
