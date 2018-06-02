<template>
    <home-header></home-header>
</template>

<script>
import HomeHeader from './component/Header.vue'
    export default {
        name:'home',
        components: {
            HomeHeader
        }
    }
</script>
<style>
.home{
    font-size: 50px;
}
</style>