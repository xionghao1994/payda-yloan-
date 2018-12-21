import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 路由前进后退
Router.prototype.goBack = function () {
    this.isBack = true
    window.history.go(-1)
}
//  引用组件
import home from '../components/home/home.vue';
import order from '../components/order/order.vue';
import our from '../components/our/our.vue';

import login from '../components/login/login.vue';

import ac from '../components/our/AC/ac.vue';
import bank from '../components/our/Bank/bank.vue';
import back from '../components/our/back/back.vue';
import call from '../components/our/Call/call.vue';
import help from '../components/our/help/help.vue';
import message from '../components/our/Message/message.vue';
import set from '../components/our/Set/set.vue';

import aboutOur from '../components/our/Set/aboutOur/aboutOur.vue';
import changePassword from '../components/our/Set/changePassword/changePassword.vue';
import borrow from '../components/home/borrow/borrow.vue';

import orderSuccess from '../components/home/borrow/orderSuccess.vue';
import recovery from '../components/home/borrow/recovery.vue';
import noSale from '../components/home/borrow/noSale.vue';
import card from '../components/home/borrow/card.vue';
import pay from '../components/home/borrow/pay.vue';
import paySuccess from '../components/home/borrow/paySuccess.vue'

// 创建路由对象
let router = new Router({
    linkActiveClass: 'mui-active',
    routes: [
        { path: '/', redirect: { name: 'home' } },
        { name: 'home', path: '/home', meta:{title:'首页'}, component: home },
        { name: 'order', path: '/order', meta:{title:'订单'}, component: order },
        { name: 'our', path: '/our', meta:{title:'个人中心'}, component: our },
        { name: 'login',path:'/login',meta:{title:'登录'},component:login},

        { path: '/ac', component: ac },
        { path: '/bank', component: bank },
        { path: '/back', component: back },
        { path: '/call', component: call },
        { path: '/help', component: help },
        { path: '/message', component: message },
        { path: '/set', component: set },
        { path: '/aboutOur', component: aboutOur },
        { path: '/changePassword', component: changePassword },
        { path: '/borrow', component: borrow },
        { path: '/orderSuccess', component: orderSuccess },
        { path: '/recovery', component: recovery },
        { path: '/noSale', component: noSale },
        { path: '/card', component: card },
        { path: '/pay', component: pay },
        { path: '/paySuccess', component: paySuccess }
    ]
})
// 页面标题
router.afterEach((to,from)=>{
    document.title=to.meta.title;
})
// 导出路由对象
export default router;
