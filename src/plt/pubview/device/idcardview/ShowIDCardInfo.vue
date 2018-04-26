/**
* Created by maijinchao on 2018/4/23.
* 显示身份证信息
*/
<template>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
</template>

<script>
  export default {
    name: "show-id-card-info",
    data(){
      return {
        name:'',
        age:''
      }
    },
    mounted(){

    }

  }
</script>

<style scoped>

</style>
