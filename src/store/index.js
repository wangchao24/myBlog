
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



let state = {
    userInfo: {
        user: ''
    }
};

let mutations = {
    setUserInfo(state, n) {
        state.userInfo.user = n;
    }
};


let actions = {
    checkLogin(context, { next, needLogin }) {
        ajax.get("/api/signin/checkLogin", {}).then((res) => {
            app.login = res.data.login;
            if (needLogin && app.login == false) {
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