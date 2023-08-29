<template>
  <div  class="box">
    <div @click="fn">按钮</div>
  </div>
</template>
<script>
export default{
  methods:{
      fn(){
        alert('点到我了');
      }
  }
}
</script>
<style lang="less">
  .box{
      width: 400px;
      height: 400px;
      background-color: pink;
      div{
          height: 200px;
          width: 200px;
          background-color: skyblue;
      }
  } 
</style>