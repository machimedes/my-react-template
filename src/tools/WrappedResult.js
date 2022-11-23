export default class WrappedResult {
  constructor(httpStatus, data, errorData) {
    this.httpStatus = httpStatus; // http请求自身的返回码
    this.httpErrorMessage = errorData; // http请求失败的错误信息

    this.data = data.data; // 响应数据中的业务数据
    this.code = data.code; // 响应数据中的业务码
    this.message = data.message; // 响应数据中的提示消息
  }
}


