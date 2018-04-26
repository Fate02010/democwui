/**
 * Created by maijinchao on 2018/4/19.
 * 路由截取器
 */

import router from '../../../app/router/index'
import NProgress from 'nprogress'
import { getToken } from '../../security/cookies/tokenUtils'
import store from '../../../store/index'
import Moment from 'moment'

/**
 * 路由导航守卫,进入页面时候操作
 */
router.beforeEach((to, from, next) => {
  //进度条
  //NProgress.start();
  //判断是否有token
  debugger;
  let token = getToken();
  console.log(getToken())
  if(getToken()){
    debugger;
      if(to.path === 'login'){
        // 首页
        next({path: '/home'});
      }else{
        // 考虑是否每次进入首页都需要重新获取权限数据
        console.log('重新获取数据');
      }
      next();
  }else{
    if(to.path === '/login'){
      next();
    }
    //没有 token 直接跳转到登录页
    next({path: '/login'});
  }

  // //重置计数
  // store.commit('reSetCount')
  // //停止上一个倒计时
  // store.commit('stopCount')
  // //重定向到主页
  // if (to.path == '/') {
  //   next({ path: '/home'})
  // }
  // if(to.path == '/home'){
  //   store.commit('setCountState',false)
  //
  // }else{
  //   store.commit('setCountState',true)
  //   //开启倒计时
  //   store.commit('startCount',function () {
  //     //console.log(store.state.app.count)
  //      if(store.state.app.count == 0){
  //        // 超时,回到首页
  //        next({path: '/home'})
  //      }
  //   })
  // }
  // //页面跳转记录日志
  // console.log("记录日志,调用日志服务");
  // console.log(Moment().format('MMMM Do YYYY, h:mm:ss a'));
  // console.log("从" + from.path + "跳转" + to.path);
  //next();
})



