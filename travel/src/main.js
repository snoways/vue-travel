import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import "./assets/style/reset.css";
import "./assets/style/border.css";
import "./assets/style/iconfont.css";
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.config.productionTip = false;
// 解决移动端 点击按钮延迟300ms问题
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
