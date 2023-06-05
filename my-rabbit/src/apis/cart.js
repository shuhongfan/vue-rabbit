// 封装购物车相关接口

import httpInstance from "@/utils/http";
import http from "@/utils/http";

// 加入购物车
export const insertCartAPI = ({skuId, count}) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

// 获取最新购物车的列表
export const findNewCartListAPI=()=>{
    return httpInstance({
        url:'/member/cart'
    })
}

// 删除购物车商品
export const delCartAPI=(ids)=>{
    return httpInstance({
        url:'/member/cart',
        method:"DELETE",
        data:{
            ids
        }
    })
}

// 合并购物车
export const mergeCartAPI=(data)=>{
    return httpInstance({
        url:'/member/cart/merge',
        method:'POST',
        data
    })
}