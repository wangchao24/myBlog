<!--
    by:     wangchao 2018/09/28
    name:   个人主页-查看文章
    notes:  
-->

<template>
    <div class='viewArticleWrap'>
        <el-button @click="editArticle">编辑</el-button>
        <div class='articleContent'>
            <h3 class='title'>{{article.title}}</h3>
            <div class='detailInfo'>
                <span>创建时间</span>
                <span>作者</span>
            </div>
            <p class='content' v-html='article.content'></p>
        </div>
        <!--评论列表  -->
        <div class='commentList'>
            <div class='commentBox'>
                <div v-for='(item,index) in comments' :key='index' class='clearfix'>
                    <div class='imgBox'>
                        <img src="" alt="">
                    </div>
                    <p class='content' v-html='item.content'></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {

    },
    mounted() {
        this.getListDetail();
    },
    data() {
        return {
            article: {

            },
            comments: [],//文章的评论列表
        }
    },
    methods: {
        //根据文章id查询文章的详细信息
        getListDetail() {
            ajax.get('/api/posts/detail', {
                params: {
                    id: this.$route.query.id
                }
            }).then((res) => {
                this.article = res.data.data;
                this.comments = res.data.data.comments;
            })
        },
        //编辑一篇文章
        editArticle() {

            this.$router.push({
                path: '/personCenter/editArticle',
                query: this.$route.query
            })
        }
    }
}
</script>

<style lang='less' scoped>
.viewArticleWrap {
    widows: 1200px;
    height: 100%;
    .articleContent {
        text-align: center;
        background: #fff;
        margin-bottom: 20px
    }
}


.viewArticleWrap {
    .commentList {
        background: #fff;
        .commentBox {
            .imgBox {
                width: 50px;
                height: 50px;
                background: red;
                border-radius: 100%;
                float: left;
            }
            .content {
                overflow: hidden;
            }
        }
    }
}
</style>

