export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface RequestOptions {
  // post请求的时候添加参数到url
  joinParamsToUrl?: boolean;
  // 格式化提交参数时间
  formatDate?: boolean;
  // 需要对返回数据进行处理
  isTransformResponse?: boolean;
  // 是否返回原生响应头 比如：需要获取响应头时使用该属性
  isReturnNativeResponse?: boolean;
  // 默认将prefix 添加到url
  joinPrefix?: boolean;
  // 接口地址
  apiUrl?: string;
  // 请求拼接路径
  urlPrefix?: string;
  // 消息提示符类型错误
  errorMessageMode?: ErrorMessageMode;
  //  是否加入时间戳
  joinTime?: boolean;
  // 忽略重复请求
  ignoreCancelToken?: boolean;
  // 是否携带token
  withToken?: boolean;
}

export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Recordable;
  // File parameter interface field name
  name?: string;
  // file name
  file: File | Blob;
  // file name
  filename?: string;
  [key: string]: any;
}
