import {createRouter, createWebHistory} from 'vue-router'
import Layout from "@/views/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";
import Detail from "@/views/Detail/index.vue";
import CartList from "@/views/CartList/index.vue";
import Checkout from "@/views/Checkout/index.vue";
import Pay from "@/views/Pay/index.vue";
import PayBack from "@/views/PayBack/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    component: Home
                },
                {
                    path: 'category/:id',
                    component: Category,
                }, {
                    path: 'category/sub/:id',
                    component: SubCategory,
                }, {
                    path: 'detail/:id',
                    component: Detail,
                }, {
                    path: 'cartlist',
                    component: CartList,
                }, {
                    path: 'checkout',
                    component: Checkout
                }, {
                    path: 'pay',
                    component: Pay
                }, {
                    path: 'paycallback',
                    component: PayBack
                }
            ]
        }, {
            path: '/login',
            component: Login
        }
    ],
    // 路由滚动行为定制
    scrollBehavior() {
        return {
            top: 0,
        }
    },
})

export default router
