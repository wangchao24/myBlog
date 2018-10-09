<!--
    by:     wangchao 2018/09/20
    name:   个人主页-编辑文章
    notes:  
-->
<template>
    <div class='editArticle'>
        <!-- <el-input v-model='articleInfo.title'></el-input>
                                            <el-input type='textarea' v-model='articleInfo.content'></el-input> -->

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
        info: {
            require: true,
            default: {},
        }
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
    },
    methods: {
        //创建文章
        storeArticle() {
            ajax.post('/api/posts/create', {
                title: this.articleInfo.title,
                content: this.articleInfo.content
            }).then((res) => {
                console.log(res);
            })
        },
        //监听文章改变事件
        changeHandle() {

        }
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