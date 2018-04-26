import Vue from 'vue'
import Router from 'vue-router'
import  Layout  from '../bussview/Layout'
import  Home from '../bussview/home/Home'
import  GrzxHome from '../bussview/grzx/GrzxHome'
import  readIDCard from '../../plt/pubview/device/idcardview/ReadIDCard'
import  Login from '../../plt/pubview/login/LoginView'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home,
        name: '主页'
      },
      {
        path: 'grzxHome',
        component: GrzxHome,
        name: '个人征信首页'
      },
      {
        path: 'readIDCard',
        component:readIDCard
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
