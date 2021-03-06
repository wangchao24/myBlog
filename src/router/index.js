
// import Login from '@/components/Login.vue'


let routes = [
    {
        path: '/',
        redirect: "/posts"
    },
    {
        path: '/login',
        component: (r) => {
            require.ensure([], () => r(require('@/components/Login.vue')), "login")
        },
    },
    {
        path: '/sigin',
        component: (r) => {
            require.ensure([], () => r(require('@/components/Sigin.vue')), "sigin")
        },
    },
    {
        path: '/index',
        component: (r) => {
            require.ensure([], () => r(require('@/components/Index.vue')), "index")
        },
    },
    {
        path: '/edit',
        meta: {
            needLogin: true,
        },
        component: (r) => {
            require.ensure([], () => r(require('@/components/posts/EditPost.vue')), "edit")
        },
    },
    {
        path: '/detail',
        meta: {
            needLogin: true,
        },
        component: (r) => {
            require.ensure([], () => r(require('@/components/posts/PostDetail.vue')), "detail")
        },
    },
    {
        path: '/posts',
        meta: {
            needLogin: false,
        },
        component: (r) => {
            require.ensure([], () => r(require('@/components/posts/PostList.vue')), "posts")
        },
    },
    {
        path: '/personCenter',
        meta: {
            needLogin: false,
        },
        component: (r) => {
            require.ensure([], () => r(require('@/components/user/Index.vue')), "personCenter")
        },
        children: [
            {
                path: 'articleList',
                name: 'perList',
                component: (r) => {
                    require.ensure([], () => r(require('@/components/user/ArticleList.vue')), "articleList")
                }
            },
            {
                path: 'editArticle',
                name: 'perListEdit',
                component: (r) => {
                    require.ensure([], () => r(require('@/components/user/EditArticle.vue')), "editArticle")
                }
            },
            {
                path: 'viewArticle',
                name: 'perListView',
                component: (r) => {
                    require.ensure([], () => r(require('@/components/user/ViewArticle.vue')), "viewArticle")
                }
            }
        ]
    },

]
export default routes;