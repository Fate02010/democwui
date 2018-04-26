/**
 * Created by maijinchao on 2018/4/26.
 *  日志服务请求封装
 */
import axios from 'axios'


// 创建 axios 实例
const  logRequest = axios.create({
  baseURL: process.env.BASE_API,
  timeout: process.env.TIMEOUT
})

export default logRequest
