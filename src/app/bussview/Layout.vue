/**
* Created by maijinchao on 2018/4/17.
*  主页面框架
*/
<template>
  <div>
    <header-bar :headerTitle="headerTitle"></header-bar>
    <app-main>Main</app-main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import FooterBar from './pubcomponents/footer/Footer'
  import HeaderBar from './pubcomponents/header/Header'
  import AppMain from './pubcomponents/appmain/Appmain'
  import ElContainer from "element-ui/packages/container/src/main";

  export default {
    name: 'Layout',
    components: {
      ElContainer,
      HeaderBar,
      FooterBar,
      AppMain
    },
    data: function () {
      return {
        headerTitle: '市民之窗',
        footerName: '金赋科技'
      }
    }
  }
</script>

<style scoped>

</style>
