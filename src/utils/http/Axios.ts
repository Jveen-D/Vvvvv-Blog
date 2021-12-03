/**
 * AxiosRequestConfig---axios请求配置
 * AxiosInstance---axios实例
 * AxiosResponse---axios响应
 * AxiosError---aixos错误
 */
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios';
/**
 * RequestOptions---请求配置interface接口
 * Result---响应类型
 * UploadFileParams---上传文件
 */
import type { RequestOptions, Result, UploadFileParams } from '/#/axios';
/**
 * CreateAxiosOptions---axios配置选项
 */
import type { CreateAxiosOptions } from './axiosTransform';
import axios from 'axios';
import qs from 'qs';
/**
 * AxiosCanceler---取消重复请求
 */
import { AxiosCanceler } from './axiosCancel';
import { isFunction } from '/@/utils/is';
import { cloneDeep } from 'lodash-es';
/**
 * ContentTypeEnum---content type枚举
 */
import { ContentTypeEnum, RequestEnum } from '/@/enums/httpEnum';
