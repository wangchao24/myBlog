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
                <el-input v-model="formData.passWord" placeholder="请输入密码"></el-input>
            </el-form-item>
        </el-form>
        <el-button>登录</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                passWord: ''
            }
        }
    }
}
</script>
<style lang='less' scoped>
    .loginWrap  {
        width: 400px;
        margin: 0 auto;
    }
</style>

