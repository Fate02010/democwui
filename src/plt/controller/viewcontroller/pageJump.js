/**
 * Created by maijinchao on 2018/4/18.
 *  页面跳转
 */

import Router from '../../../app/router/index'

/**
 * 页面跳转
 * @param url 转跳地址
 */
export function pageToNext(url, beforeJump, afterJump) {
  if (beforeJump != undefined) {
    beforeJump();
  }
  Router.push(url);
  if (afterJump != undefined) {
    afterJump();
  }
}
