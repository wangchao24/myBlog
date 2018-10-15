<!--
    by:     wangchao 2018/09/25
    name:   头部导航
    notes:  
-->

<template>
    <div class='headWrap clearfix'>
        <div class='logoBox' @click='()=>{this.$router.push({path:"/posts"})}'>
            <img src="../assets/logo.png" alt="" class='logo'>
        </div>
        <div class='actionBox'>
            <div v-if='!login'>
                <span @click="()=>{this.$router.push({path:'/login'})}">登录</span>
                <span @click="()=>{this.$router.push({path:'/sigin'})}">注册</span>
            </div>
            <div v-if='login'>
                <span @click="()=>{this.$router.push({path:'/personCenter/articleList'})}">个人主页</span>
                <span @click="()=>{this.$router.push({path:'/edit'})}">发表文章</span>
                <span @click="signout">退出</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['login'])

    },
    methods: {

        //获取vuex 提交函数
        ...mapMutations(["setLoginState"]),
        //退出登录
        signout() {
            ajax.get('/api/signout', {}).then((res) => {
                this.setLoginState(false)
                this.$router.push({
                    path: '/posts'
                })
            })
        }
    }
}
</script>
<style lang='less' scoped>
.headWrap {
    height: 50px;
    width: 100%;
    .logoBox {
        height: 50px;
        width: 50px;
        float: left;
        .logo {
            height: 100%;
            width: 100%;
        }
    }
    .actionBox {
        float: right;
        line-height: 50px;
    }
}
</style>

