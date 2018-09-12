// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routers from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import ajax from 'axios'
Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(ElementUI);


const router = new VueRouter({
    mode: 'history',
    routes: routers
})
window.ajax = ajax;

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
