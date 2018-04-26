/**
 * Created by maijinchao on 2018/4/23.
 */
import deviceRequest from '../deviceRequest'

export function readIDCard() {
  return deviceRequest({
    url: '/IDCard',
    method: 'get'
  })
}
