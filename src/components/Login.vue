<!--
    by:     wangchao 2018/09/11
    name:   登录页
    notes:  
-->
<template>
    <div class='loginWrap'>
        <el-form>
            <el-form-item label="用户名:">
                <el-input v-model="formData.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click='login'>登录</el-button>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            formData: {
                name: '',
                password: ''
            }
        }
    },
    computed: {

    },
    methods: {
        ...mapMutations(['setUserInfo']),
        login() {
            ajax.post('/api/signin/', {
                name: this.formData.name,
                password: this.formData.password
            }).then((res) => {
                if (res.data.status != 200) {
                    this.$message.info(res.data.message)
                } else {
                    let token = util.getCookie("token");
                    //登录成功跳转到首页
                    this.$router.push({
                        path: '/posts',
                    })
                }

            })
        }
    }
}
</script>
<style lang='less' scoped>
.loginWrap {
    width: 400px;
    margin: 0 auto;
}
</style>

