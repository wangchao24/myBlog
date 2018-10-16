<!--
    by:     wangchao 2018/09/11
    name:   文章列表页
    notes:  
-->
<template>
    <div class='indexWrap'>
        <header-box></header-box>
        <!-- <div v-if='!ifLogin'>
                                                            <span @click="()=>{this.$router.push({path:'/login'})}">登录</span>
                                                            <span @click="()=>{this.$router.push({path:'/sigin'})}">注册</span>
                                                             <el-dropdown>
                                                                        <span class="el-dropdown-link">
                                                                            <i class="el-icon-tickets" style='font-size:35px'></i>
                                                                        </span>
                                                                        <el-dropdown-menu slot="dropdown">
                                                                            <el-dropdown-item @click="()=>{this.$router.push({path:'/login'})}">登录</el-dropdown-item>
                                                                            <el-dropdown-item @click="()=>{this.$router.push({path:'/sigin'})}">注册</el-dropdown-item>
                                                                        </el-dropdown-menu>
                                                                    </el-dropdown>   
                                                        </div>
                                                        <div v-if='ifLogin'>
                                                            <span @click="()=>{this.$router.push({path:'/personCenter'})}">个人主页</span>
                                                            <span @click="()=>{this.$router.push({path:'/edit'})}">发表文章</span>
                                                            <span @click="signout">退出</span>
                                                             <el-dropdown>
                                                                        <span class="el-dropdown-link">
                                                                            <i class="el-icon-tickets"></i>
                                                                        </span>
                                                                        <el-dropdown-menu slot="dropdown">
                                                                            <el-dropdown-item @click="()=>{this.$router.push({path:'/personCenter'})}">个人主页</el-dropdown-item>
                                                                            <el-dropdown-item @click="()=>{this.$router.push({path:'/edit'})}">发表文章</el-dropdown-item>
                                                                            <el-dropdown-item @click="signout">退出登录</el-dropdown-item>

                                                                        </el-dropdown-menu>
                                                                    </el-dropdown> 
                                                        </div> -->

        <div v-for='(item,index) in articleList' :key='index' class='articleWrap' @click='viewDetailHandle(item._id)'>
            <h3 class='title'>{{item.title}}</h3>
            <p class='title' v-html='item.content'></p>
            <div class='articleDetail'>
                <span>创建时间{{item.creatTime}}</span>
                <span>评论{{item.comments.length}}</span>
                <span>浏览人数{{item.pv}}</span>
            </div>
        </div>
        <!--分页  -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageConfig.currentPage" :page-size="pageConfig.pageSize" :page-sizes="pageConfig.list" layout="total, prev, pager, next" :total="pageConfig.total">
        </el-pagination>
    </div>
</template>
<script>
import headerBox from "@/modules/Header"
import { mapState } from 'vuex'
export default {
    data() {
        return {
            pageConfig: {
                pageSize: 10,
                total: 0,
                currentPage: 1,
                list: [10, 20, 50]
            },//分页参数配置
            articleList: []//文章列表
        }
    },
    mounted() {
        this.getPostList();
    },
    computed: {
        ...mapState(['login'])
    },
    components: {
        headerBox
    },
    methods: {
        //获取文章列表
        getPostList() {
            ajax.post('/api/posts', {
                pageSize: this.pageConfig.pageSize,
                currentPage: this.pageConfig.currentPage
            }).then((res) => {
                this.articleList = res.data.list.map((item) => {
                    item.creatTime = new Date(item.creatTime).Format("yyyy-MM-dd");
                    return item;
                });
                this.pageConfig.pageSize =  res.data.pageSize;
                this.pageConfig.currentPage = res.data.currentPage;
                this.pageConfig.total = res.data.total;
            })
        },
        //查看文章详情
        viewDetailHandle(id) {
            let query = {};
            query.id = id;
            this.$router.push({
                path: '/detail',
                query: query
            })
        },
        //调整每页显示的条数
        handleSizeChange() {

        },
        //切换页数
        handleCurrentChange() {

        }
    }
}
</script>
<style lang='less' scoped>
.articleWrap {
    margin-bottom: 10px;
    background: #fff;
    margin-bottom: 10px;
    .el-icon-tickets {
        font-size: 35px;
    }
}
</style>

