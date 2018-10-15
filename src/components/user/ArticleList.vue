<!--
    by:     wangchao 2018/09/20
    name:   个人主页-文章列表
    notes:  
-->

<template>
    <div class='personArticleWrap'>
        <div class='listWrap'>
            <div class='articleItem' v-for='(item,index) in articleList' :key='index' @click='viewArticleHandle(item._id)'>
                <p class='title'>{{item.title}}</p>
                <p class='content' v-html='item.content'></p>
            </div>
        </div>
        <el-button @click='createArticle'>创建</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            articleList: [],//个人文章列表
        }
    },
    mounted() {

        this.getArtileList();
    },

    methods: {
        //获取当前用户的文章列表
        getArtileList() {
            ajax.get('/api/personCenter', {
                params: {

                }
            }).then((res) => {
                this.articleList = res.data;
            })
        },

        /**
         * 查看某一篇文章的详细信息
         * @param id {String} 当前文章的ID
        */
        viewArticleHandle(id) {
            this.$router.push({
                path: '/personCenter/viewArticle',
                query: { id: id }
            })
        },



        //创建一篇文章,跳转到创建文章页面
        createArticle() {
            this.$router.push({
                path: '/personCenter/editArticle',
            })
        },
    }
}
</script>
<style lang='less' scoped>
.listWrap {
    .articleItem {
        text-align: center;
        background: #fff;
    }
}
</style>


