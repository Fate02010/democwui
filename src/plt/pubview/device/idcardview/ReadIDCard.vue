/**
* Created by maijinchao on 2018/4/23.
*/
<template>
  <div>正在读取身份证</div>

</template>

<script>
  import { pageToNext } from '../../../controller/viewcontroller/pageJump'
  import { readIDCard } from '../../../deviceservice/idcardservice/idcardService'
  export default {
    name: "read-id-card",
    mounted(){
      // 读取身份证
      readIDCard().then((data) => {
         console.log(data)
      }).catch((error) => {
        debugger;
        console.log(error);
        console.log("捕获界面异常");
      })
    }
  }
</script>

<style scoped>

</style>
