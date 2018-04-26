/**
* Created by maijinchao on 2018/4/18.
* 主页
*/
<template>
  <div>
    <el-carousel type="card" height="600px" :interval="4000">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img v-bind:src="item" height="100%" width="100%" v-on:click="click()">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import img177 from '@/assets/177650.jpg'
  import img178 from '@/assets/263689.jpg'
  import img179 from '@/assets/788719.jpg'
  import img180 from '@/assets/870804.jpg'
  import ElCarousel from "element-ui/packages/carousel/src/main";
  import ElCarouselItem from "element-ui/packages/carousel/src/item";
  import { pageToNext } from '../../../plt/controller/viewcontroller/pageJump'

  export default {
    components: {
      ElCarouselItem,
      ElCarousel
    },
    name: "home",
    data() {
      return {
        imgList: [
          img177,
          img178,
          img179,
          img180
        ]
      }
    },
    methods :{
      click() {
        pageToNext('grzxHome');
      }
    }
  }
</script>

<style scoped>

</style>
