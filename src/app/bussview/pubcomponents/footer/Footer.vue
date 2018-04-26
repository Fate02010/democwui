/**
* Created by maijinchao on 2018/4/17.
* 通用的页脚
*/
<template>
  <div class="footer-nav">
    <el-row :gutter="20">
      <el-col :span="3">
        <el-tag type="success">金赋科技</el-tag>
      </el-col>
      <el-col :span="6">
        <el-button type="primary">操作说明</el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" v-on:click="homeClick()">主页</el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="primary">二维码</el-button>
      </el-col>
      <!--<el-col :span="3">-->
      <!--<el-tag type="primary" v-show="dis">倒计时</el-tag>-->
      <!--</el-col>-->
      <el-col :span="3">
        <count-time v-show="dis">倒计时</count-time>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElFooter from "element-ui/packages/footer/src/main";
  import ElButton from "element-ui/packages/button/src/button";
  import {pageToNext} from '../../../../plt/controller/viewcontroller/pageJump'
  import CountTime from '../countTime/CountTime'

  export default {
    components: {
      ElButton,
      ElFooter,
      CountTime
    },
    name: 'Footer',
    props: ['footerTitle'],
    methods: {
      homeClick() {
        //跳转到首页
        pageToNext('home')
      }
    },
    computed: {
      dis: function () {
        return this.$store.getters.isCountdown
      }
    }
  }
</script>

<style scoped>
  .footer-nav {
    position: fixed;
    width: 100%;
    height: 60px;
    bottom: 0px;
  }

  el-row {
    margin: 20px;
  }

  el-col {
    border-radius: 4px;
  }

</style>
