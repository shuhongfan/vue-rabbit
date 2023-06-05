import httpInstance from "@/utils/http";

export const getUserOrder = (params) => {
    return httpInstance({
        url:'/member/order',
        method:'GET',
        params
    })
}