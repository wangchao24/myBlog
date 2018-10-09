// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routers from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import ajax from './lib/api'
import store from './store/index.js'
import util from './lib/util.js'
import vueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
if (!window.util) window.util = util;
Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(vueQuillEditor);


const router = new VueRouter({
    mode: 'history',
    routes: routers
})

//路由切换前，检查登录状态
router.beforeEach((to, from, next) => {
    let needLogin = to.matched.some(item => item.meta.needLogin == true);
    console.log(needLogin);
    store.dispatch('checkLogin', { next, needLogin });
})

window.ajax = ajax;

let app = window.app = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    data() {
        return {
            login: false
        }
    }
})
