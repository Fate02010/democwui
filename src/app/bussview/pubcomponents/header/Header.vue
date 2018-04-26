/**
* Created by maijinchao on 2018/4/17.
* 页面固定头部
*/
<template>
  <el-header class="header-nav">
    <el-tag type="success" size="medium">市民之窗</el-tag>
  </el-header>
</template>

<script>
  import ElHeader from "element-ui/packages/header/src/main";

  export default {
    components: {ElHeader},
    // name: "header",
    props: ['headerTitle']
  }
</script>

<style scoped>
  .header-nav {
    width: 100%;
    height: 60px;
  }


</style>
