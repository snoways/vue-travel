# vue.js 去哪儿网app
>This is the branch for @vue/cli 3.0.

## 一.开发环境搭建
>1.在[node.js官网](https://nodejs.org/en/)下载最新LTS的node.js安装包  
>2.通过命令行 **node -v** 和 **npm -v** 确认 是否安装成功  
>3.通过 **npm install -g @vue/cli**  安装vue-cli构建工具  
>4.安装好vue-cli工具后就可以通过 **vue create project-name**来创建初始化vue项目
>5.在创建好的根项目路径下通过 **npm run serve** 来启动服务

## 二.样式初始化及移动端点击事件延迟处理
> ### 1.引入reset.css来统一初始化所有HTML标签样式  
>### 2.引入border.css来解决一像素问题  
>### 3.通过fastclick模块来解决移动端事件延迟问题  
>### 4.进入文件根目录输入命令:npm install fastclick --save 添加fastclick模块  
>### 5.在项目中引用fastclick
```
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import "./assets/style/reset.css";
import "./assets/style/border.css";
Vue.config.productionTip = false;
// 解决移动端 点击按钮事件延迟的问题
fastClick.attach(document.body);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

```