/**
* Created by maijinchao on 2018/4/17.
*
*/
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main";

  export default {
    components: {ElContainer},
    name: "AppMain"
  }
</script>

<style scoped>

</style>
