<!--
    by:     wangchao 2018/09/11
    name:   文章详情页
    notes:  
-->
<template>
    <div class='indexWrap'>
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
            <el-button @click='addComment' type="primary">添加评论</el-button>
            <div class='commentBox'>
                <div v-for='(item,index) in comments' :key='index' class='clearfix'>
                    <div class='imgBox'>
                        <img src="" alt="">
                    </div>
                    <p class='content' v-html='item.content'></p>
                </div>
            </div>
        </div>

        <!--添加评论的弹框-->
        <el-dialog title='添加评论' :visible.sync="dialogVisible" width="30%">
            <el-input v-model='commentContent'>

            </el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancleCommit">取 消</el-button>
                <el-button type="primary" @click="commitComment">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible: false,//控制评论弹框显示隐藏
            commentContent: '',//添加评论弹框的
            article: {
                title: '',
                content: ''
            },
            comments: [],//文章的评论列表
        }
    },
    mounted() {
        this.getPostDetail();
    },
    methods: {
        //获取页面的详细信息
        getPostDetail() {
            ajax.get('api/posts/detail', {
                params: {
                    id: this.$route.query.id
                }
            }).then((res) => {

                this.article.title = res.data.title;
                this.article.content = res.data.content;
                this.comments = res.data.comments;
            })
        },
        //获取文章的评论列表
        getPostComments() {

        },
        //添加评论按钮
        addComment() {
            // ajax.post('/api/comments', {
            //     params: {
            //         content: '',
            //         articleId: '',
            //     }
            // })
            this.dialogVisible = true;
        },
        //添加评论弹框确认
        commitComment() {
            ajax.post('/api/comments', {
                content: this.commentContent,
                articleId: this.$route.query.id
            }).then((res) => {
                this.getPostDetail();
                this.dialogVisible = false;
                this.commentContent = '';
            })


        },
        //添加评论弹框取消
        cancleCommit() {
            this.dialogVisible = false;
            this.commentContent = '';
        }
    }
}
</script>
<style lang='less' scoped>
.indexWrap {
    widows: 1200px;
    height: 100%;
    .articleContent {
        text-align: center;
        background: #fff;
        margin-bottom: 20px
    }
}


.indexWrap {
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

