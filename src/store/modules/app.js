/**
 * Created by maijinchao on 2018/4/19.
 */

const app = {
  state: {
    //是否启动倒计时
    isCountdown: false,
    //倒计时值,暂时写死,以后必须做成配置
    count: 30,
    timer: undefined
  },
  mutations: {
    // 设置倒计时状态
    setCountState: (state, status) => {
      state.isCountdown = status
    },
    // 重设计数
    reSetCount: (state) => {
      state.count = 30
    },
    //开始倒计时
    startCount: (state,callback) => {
        state.timer = setInterval(function () {
        if(state.count > 0){
          state.count--
        }
        callback()
      },1000)
    },
    //停止倒计时
    stopCount: (state) => {
      if(state.timer != undefined){
        clearInterval(state.timer)
      }
    }
  },
}
export default app
