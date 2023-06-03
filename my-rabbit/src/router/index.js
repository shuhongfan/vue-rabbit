import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'category/:id',
          component: Category,
        },{
          path:'category/sub/:id',
          component: SubCategory,
        },
      ]
    },{
      path:'/login',
      component:Login
    }
  ]
})

export default router
