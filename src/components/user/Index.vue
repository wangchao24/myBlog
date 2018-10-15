<!--
    by:     wangchao 2018/09/20
    name:   个人主页
    notes:  
-->

<template>
    <div class='personCenterIndex'>
        <header-box></header-box>
        <div class='content clearfix'>
            <div class='leftMenu'>
                <el-menu default-active="1" class="el-menu-vertical-demo">
                    <el-menu-item index="1" @click='articleHandle'>
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的文章</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class='rightContent'>
                <!-- <component :is="personCenterView" :info='info' v-on:editArticle='editArticleHandle' v-on:viewArticle='viewArticleHandle'></component> -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
// import articleList from './ArticleList.vue'
// import editArticle from './EditArticle.vue'
// import viewArticle from './ViewArticle.vue'
import headerBox from "@/modules/Header"
export default {
    data() {
        return {
            personCenterView: 'articleList',
            info: ''
        }
    },
    components: {
        headerBox
    },
    methods: {
        //查看文章列表
        articleHandle() {
            this.$router.push({
                path: '/personCenter/articleList'
            })
        }
    }
}
</script>
<style lang='less' scoped>
@import "~@/assets/less/theme.less";
.personCenterIndex .content {
    width: 100%;
    height: 100%;
    display: flex;
    .leftMenu {
        width: 200px;
        float: left;
        overflow: hidden;
    }
}

.personCenterIndex .content .rightContent {
    height: 100%;
    flex: 1;
    border: 1px solid red;
}
</style>
