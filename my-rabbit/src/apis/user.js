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