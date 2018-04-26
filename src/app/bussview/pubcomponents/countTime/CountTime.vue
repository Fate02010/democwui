/**
* Created by maijinchao on 2018/4/19.
* 倒计时控件
*/
<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
  export default {
    name: "count-time",
    computed: {
      count: function () {
        return this.$store.state.app.count
      }
    },
    methods:{
      created: function () {
        console.log("创建完毕------------");
      }
    },
  }
</script>

<style scoped>

</style>
