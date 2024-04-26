import BaseResponse from "./BaseResponse";

class OpenApiError extends BaseResponse {
  constructor(message: string = "OpenApi Error!") {
    super(message, 500, false);
    Object.setPrototypeOf(this, OpenApiError.prototype);
  }
}

export default OpenApiError;
