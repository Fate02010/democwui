/**
 * Created by maijinchao on 2018/4/26.
 * 日志服务
 */

import logRequest from './logRequest'

/**
 *  记录日志
 * @param msg 记录日志 (日志信息需要明确一个类结构)
 * @returns {AxiosPromise} 返回信息
 */
export function logEvent(msg) {
  const data = {
    info:msg
  }
  return logRequest({
    url: '/api/log/logEvent',
    method: 'post',
    data
  });
}
