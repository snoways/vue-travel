<template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-input">请输入城市/景点/游玩主题</div>
        <div class="header-right">城市</div>
    </div>
</template>

<script>
    export default {
        name:'HomeHeader'
    }
</script>

<style lang="stylus" scoped>
.header
  background-color: #00bcd4
  line-height .86rem
  display flex
  color #ffffff
  .header-left
    width: .64rem
    float: left 
  .header-input
    flex 1 
    background #fff
    border-radius .1rem
    margin-top .12rem
    line-height .64rem
    height .64rem
    margin-left .12rem
    color #ccc
  .header-right
    width: 1.24rem
    float: right
    text-align center  
</style>