<!--
    by:     wangchao 2018/09/20
    name:   个人主页-编辑文章
    notes:  
-->
<template>
    <div class='editArticle'>

        <div class='editWrap'>
            <el-input v-model='articleInfo.title'></el-input>
            <quill-editor v-model='articleInfo.content' class='editer' @change='changeHandle'>

            </quill-editor>
        </div>

        <div style='margin-top:45px;'>
            <el-button @click='storeArticle'>保存</el-button>
        </div>

    </div>
</template>
<script>
export default {
    props: {

    },
    data() {
        return {
            articleInfo: {
                title: '',
                content: ''
            },//文章信息
        }
    },
    mounted() {
        if (this.$route.query.id) {
            this.getListDetail();
        }
    },
    methods: {
        //创建文章
        storeArticle() {
            ajax.post('/api/posts/create', {
                title: this.articleInfo.title,
                content: this.articleInfo.content,
                articleId: this.this.$route.query.id ? this.this.$route.query.id : ''
            }).then((res) => {
                this.$router.push({
                    path: '/personCenter/articleList'
                })
            })
        },
        //根据文章id查询文章的详细信息
        getListDetail() {
            ajax.get('/api/posts/detail', {
                params: {
                    id: this.$route.query.id
                }
            }).then((res) => {
                this.articleInfo.title = res.data.data.title;
                this.articleInfo.content = res.data.data.content;
            })
        },
        //监听文章改变事件
        changeHandle() {

        },
        //文章编辑保存的页面

    }

}
</script>
<style lang='less' scoped>
.editArticle {
    .editer {
        height: 400px;
    }
}
</style>