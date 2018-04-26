/**
 * Created by maijinchao on 2018/4/25.
 * 基础请求封装,负责通用的请求.
 */

import axios from 'axios'
import { logEventUtils } from './log/logUtils'


// 创建 axios 实例
const  baseRequest = axios.create({
  baseURL: process.env.BASE_API,
  timeout: process.env.TIMEOUT
})

baseRequest.interceptors.response.use( response => {
  //成功直接返回信息(返回信息是否有状态码,判断硬件处理方式,而不是直接抛出异常)
  return response;
},error => {
  //失败,做日志记录,需要拼装日志格式,这里暂时没有拼装格式,需要与骁佳确认
  //异常存在两种,一种客观原因异常:网络断开,一种业务系统自身Exception
  logEventUtils(error.data);
})

export default baseRequest
