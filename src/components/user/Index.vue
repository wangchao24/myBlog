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
                <component :is="personCenterView" :info='info' v-on:editArticle='editArticleHandle' v-on:viewArticle='viewArticleHandle'></component>
            </div>
        </div>
    </div>
</template>
<script>
import articleList from './ArticleList.vue'
import editArticle from './EditArticle.vue'
import viewArticle from './ViewArticle.vue'
import headerBox from "@/modules/Header"
export default {
    data() {
        return {
            personCenterView: 'articleList',
            info: ''
        }
    },
    components: {
        articleList,
        editArticle,
        viewArticle,
        headerBox
    },
    methods: {
        /**
         * @param option {Oblect} preLoad
         *
        */
        editArticleHandle(option) {
            this.info = option.item;
            this.personCenterView = option.view;
        },
        /**
          * @param option {Oblect} preLoad
          *
          */
        viewArticleHandle(option) {
            this.info = option.item;
            this.personCenterView = option.view;
        },
        //查看文章列表
        articleHandle() {
            this.personCenterView = articleList;

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
