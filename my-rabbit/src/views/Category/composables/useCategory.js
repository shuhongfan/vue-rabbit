// 封装分类数据业务相关代码

import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {getCategoryAPI} from "@/apis/category";

export function useCategory() {
    // 获取分类数据
    const route = useRoute()
    const categoryData = ref({})
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id);
        console.log(id,res)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())

// 问题：存在路由缓存问题（路由只有参数变化时，会复用组件实例）
// 目标：路由参数变化的时候 可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        console.log('路由变化了', to)
        // 存在问题：使用最新的路由参数请求最新的分类数据
        getCategory(to.params.id)
    })

// 两种方案都可以解决路由缓存问题，如何选择呢？
// 在意性能问题，选择onBeforeUpdate，精细化控制
// 不在意性能问题，选择key，简单粗暴

    return {
        categoryData
    }

}