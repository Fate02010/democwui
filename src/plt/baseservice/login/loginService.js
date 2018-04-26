/**
 * Created by maijinchao on 2018/4/25.
 * 登录服务
 */
import baseRequest from '../baseRequest'

/**
 * 登录服务
 * @param username 用户名
 * @param password 密码
 * @returns {AxiosPromise} 成功返回就是token
 */
export function login(username,password) {
  const data = {
    username,
    password
  };
  return baseRequest({
    url: '/login/api/login',
    method: 'post',
    data
  });
}
