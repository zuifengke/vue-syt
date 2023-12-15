import { createRouter, createWebHistory } from "vue-router";

// createRouter 方法，用于创建路由器实例，可以管理多个路由
export default createRouter({
    // 路由模式设置
    history: createWebHistory(),
    // 路由管理
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue'),
            children: [
                {
                    path: 'register',
                    component: () => import('@/pages/hospital/register/index.vue'),
                    meta: {
                        title: '预约挂号'
                    }
                },
                {
                    path: 'detail',
                    component: () => import('@/pages/hospital/detail/index.vue'),
                    meta: {
                        title: '医院详情'
                    }
                },
                {
                    path: 'notice',
                    component: () => import('@/pages/hospital/notice/index.vue'),
                    meta: {
                        title: '预约通知'
                    }
                },
                {
                    path: 'close',
                    component: () => import('@/pages/hospital/close/index.vue'),
                    meta: {
                        title: '停诊信息'
                    }
                },
                {
                    path: 'search',
                    component: () => import('@/pages/hospital/search/index.vue'),
                    meta: {
                        title: '查询'
                    }
                },
            ]
        },
        {
            path: '/',
            redirect: '/home'
        },
    ],
    // 滚动行为：控制滚动条的位置
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
});