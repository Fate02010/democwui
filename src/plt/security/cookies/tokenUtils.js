/**
 * Created by maijinchao on 2018/4/25.
 * token 工具
 */
import  Cookies from 'js-cookie'

//认证key
const tokenKey = 'Authorization'

/**
 * 从cookie 中读取token
 */
export function getToken() {
  return Cookies.get(tokenKey);
}

/**
 * 设置 token
 * @param token token值
 * @param tokenExpires 过期时间
 */
export function setToken(token,tokenExpires) {
    let timeout = 7;
    if(tokenExpires != undefined){
      timeout = tokenExpires;
    }
    return Cookies.set(tokenKey,token,{expires: timeout})
}

/**
 * 移除 token
 */
export function removeToken() {
  return Cookies.remove(tokenKey);
}
