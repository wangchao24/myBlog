<!--
    by:     wangchao 2018/09/11
    name:   编辑文章页
    notes:  
-->
<template>
    <div class='indexWrap'>
        <el-input v-model='article.title'></el-input>
        <el-input type='textarea' v-model='article.content'></el-input>
        <el-button @click='storeHandle'>保存</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            article: {
                title: '213',
                content: "我的第一篇文章"
            }
        }
    },
    methods: {
        //保存文章接口
        storeHandle() {
            ajax.post('/api/posts/create', {
                title: this.article.title,
                content: this.article.content
            }).then((res) => {
                this.$router.push({
                    path: '/detail',
                    query: {
                        id: res.data
                    }
                })
            })
        }
    }
}
</script>
<style lang='less' scoped>

</style>

