/**
* Created by maijinchao on 2018/4/19.
*/
<template>
    <div>
      <label>个人征信首页</label>
      <el-button v-on:click="click()" type="success">请刷身份证</el-button>
    </div>
</template>

<script>
    import ElButton from "element-ui/packages/button/src/button";
    import { pageToNext } from '../../../plt/controller/viewcontroller/pageJump'

    export default {
      components: {ElButton},
      name: "grzx-home",
      methods: {
        click(){
          pageToNext('readIDCard')
        }
      }
    }
</script>

<style scoped>

</style>
