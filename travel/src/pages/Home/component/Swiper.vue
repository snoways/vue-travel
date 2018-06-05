<template>
<div class="wraper">
    <swiper :options="swiperOption">
        <swiper-slide>
            <img src="http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg"/>
        </swiper-slide>
        <swiper-slide>
            <img src="http://img1.qunarzz.com/piao/fusion/1801/93/ce59d182aca07102.jpg_640x200_ba03d44c.jpg">
        </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>

</div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data () {
    return {
    }
}
}
</script>
<style lang="stylus" scope>
.wraper
  width 100%
  overflow hidden
  height 0
  padding-bottom 31.25%
  
</style>
