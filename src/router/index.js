
// import Login from '@/components/Login.vue'


let routes = [
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
]
export default routes;