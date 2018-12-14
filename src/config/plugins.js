import Vue from 'vue';

// 引用mui的css
import '../static/css/mui.css';

// 导入mint-ui
import 'mint-ui/lib/style.css';

//全局mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);

import flexible from 'lib-flexible';

Vue.use(flexible)

import Navigation from 'vue-navigation'
import router from './router' 
Vue.use(Navigation, {router})