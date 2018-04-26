/**
 * Created by maijinchao on 2018/4/23.
 */
import requireConfig from '../../config/addressconfig/requestConfig'
import axios from 'axios'
import { getToken } from '../security/cookies/tokenUtils'
import { logEventUtils } from '../baseservice/log/logUtils'

// 创建 axios 实例
const  deviceRequest = axios.create({
  baseURL: requireConfig.device.baseUrl,
  timeout: requireConfig.device.time
})

deviceRequest.interceptors.request.use(config => {
  //设置 token 在请求头
  config.headers.Authorization = getToken();
  return config;
},error => {
  Promise.reject(error)
})

deviceRequest.interceptors.response.use(function (response) {
  return response;
},function (error) {
  logEventUtils(error);
  return Promise.reject(error);
})

export default deviceRequest
