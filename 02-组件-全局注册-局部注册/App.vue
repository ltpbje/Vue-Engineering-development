<template>
  <div class="box">
    <HmHeader></HmHeader>
    <HmMain></HmMain>
    <HmFooter></HmFooter>
  </div>
  <!-- 如果HmFooter+tab出不来 → 需要配置vscode设置中搜索 trigger on tab→勾上 -->
</template>
<script>
import HmHeader from './components/HmHeader.vue'
import HmMain from './components/HmMain.vue'
import HmFooter from './components/HmFooter.vue'
// 局部注册
export default{
  components:{
    HmHeader:HmHeader,
    HmMain,
    HmFooter
  }
}
</script>
<style>
  .box{
      width:400px;
      height:400px;
      margin: 0 auto;
      background-color:#87ceeb;
      padding-top: 10px;
  } 
</style>