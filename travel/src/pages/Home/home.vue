<template>
<div>
    <home-header></home-header>
    <home-swiper></home-swiper>
</div>
</template>

<script>
import HomeHeader from './component/Header.vue'
import HomeSwiper from './component/Swiper.vue'
    export default {
        name:'home',
        components: {
            HomeHeader,
            HomeSwiper
        }
    }
</script>
<style>

</style>