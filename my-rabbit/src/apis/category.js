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