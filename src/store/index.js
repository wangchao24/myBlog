
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



let state = {
    userInfo: {
        user: ''
    },
    login: false,
};

let mutations = {
    setUserInfo(state, n) {
        state.userInfo.user = n;
    },
    //存储当前的登录状态
    setLoginState(state, staus) {
        state.login = staus;
    }
};


let actions = {
    checkLogin(context, { next, needLogin }) {
        ajax.get("/api/signin/checkLogin", {}).then((res) => {
            context.commit('setLoginState', res.data.login);
            if (needLogin && context.state.login == false) {
                app.$router.push({
                    path: '/login'
                })
            } else {
                next()
            }
        })
    }
};


let store = new Vuex.Store({
    state,
    mutations,
    actions
});



export default store;