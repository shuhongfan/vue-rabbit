import httpInstance from "@/utils/http";

// 获取分类数据
export function getCategoryAPI(id){
    return httpInstance({
        url:'/category',
        params:{
            id
        }
    })
}

// 获取二级分类列表数据
export const getCategoryFilterAPI = (id) => {
    return httpInstance({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}

/**
 * @description: 获取导航数据
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
    return httpInstance({
        url:'/category/goods/temporary',
        method:'POST',
        data
    })
}