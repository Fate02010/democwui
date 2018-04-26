/**
 * Created by maijinchao on 2018/4/23.
 */
import deviceRequest from '../deviceRequest'

/**
 * 读取身份证读卡器
 * @returns {AxiosPromise}
 */
export function readIDCard() {
  return deviceRequest({
    url: '/IDCard',
    method: 'get'
  })
}
