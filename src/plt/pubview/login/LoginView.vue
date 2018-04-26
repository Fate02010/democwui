/**
* Created by maijinchao on 2018/4/25.
* 该登录界面还没有做输入规则验证
*/
<template>
  <div class="dialog">
    <div class="loginPage">
      <h1 style="margin: 0px">登录</h1>
      <el-form :model="formName" ref="formName">
        <el-form-item label="user">
          <el-input type="text" id="user" v-model="formName.user" placeholder="user"></el-input>
          <p>{{formName.userError}}</p>
        </el-form-item>
        <el-form-item label="password">
          <el-input type="password" id="password" v-model="formName.password" placeholder="password"></el-input>
          <p>{{formName.passwordError}}</p>
        </el-form-item>
        <el-button type="primary" @click="submitForm" v-bind:disabled="formName.beDisabled">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form>
    </div>
  </div>

</template>

<script>
  import { login } from '../../baseservice/login/loginService'
  import { pageToNext } from '../../../plt/controller/viewcontroller/pageJump'
  import { setToken } from '../../security/cookies/tokenUtils'
  export default {
    name: "login-view",
    data () {
      return {
        //初始化表单上参数
        formName: {
          user: '',
          userError:'',
          password: '',
          passwordError: '',
          beDisabled: false
        }
      }
    },
    methods:{
      resetForm: function () {
        this.formName.user = '';
        this.formName.userError = '';
        this.formName.password = '';
        this.formName.passwordError = '';
      },
      //提交表单
      submitForm: function () {
        debugger
        login(this.formName.user,this.formName.password).then(
          response => {
            debugger;
            console.log(response)
            //登录成功,设置token
            setToken(response.data);
            //转跳到主页
            pageToNext('/home')
          }).catch((error) => {
            //记录日志
            console.log(error);
        })
      }
    }
  }
</script>

<style scoped>
  html, body {
    margin: 0;
    padding: 0;
    position: relative;
  }

  .dialog {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
  }

  .loginPage {
    position: fixed;
    top: 40%;
    left: 50%;
    /*margin-top: -150px;*/
    /*margin-left: -175px;*/
    transform: translate(-50%,-50%);
    /*transform-origin:50% 50%;*/
    width: 350px;
    /*min-height: 300px;*/
    /*padding: 0px 20px 0px;*/
    /*border-radius: 8px;*/
    /*box-sizing: border-box;*/
    /*background-color: #fff;*/
  }

  .loginPage p {
    color: red;
    text-align: left;
  }
</style>
