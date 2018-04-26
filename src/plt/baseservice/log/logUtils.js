/**
 * Created by maijinchao on 2018/4/26.
 * 封装日志服务
 */
import { logEvent } from './logService'

/**
 *
 * @param msg 日志信息
 */
export function logEventUtils(msg) {

   // JS 对象序列化字符串
   let logInfo = JSON.stringify(msg);
   logEvent(logInfo).then(data => {
     debugger;
     console.log(data)
   }).catch((error) => {
     debugger;
     //服务日志异常不做处理,只是打印到控制台
     console.log(error);
   })
}

