// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入路由模块
import router from './config/router'
// 加载外部插件
import plugins from './config/plugins'
// 安装npm install stylus stylus-loader --save-dev

// 导入配置字体图标
import '../src/static/iconfont/iconfont.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  components: { App },
  template: '<App/>',
  // created() {
  //   this.$indicator.open({
  //     text:'加载中...',
  //     spinnerType: 'fading-circle'
  //   });
  // }
})
