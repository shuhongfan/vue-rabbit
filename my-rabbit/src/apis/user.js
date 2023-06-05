// 封装所有用户相关的接口

import httpInstance from "@/utils/http";

export const loginAPI = ({account, password}) => {
    return httpInstance({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}

// 猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
        url:'/goods/relevant',
        params: {
            limit
        }
    })
}