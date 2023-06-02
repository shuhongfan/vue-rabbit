// 定义懒加载插件

import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin={
    install(app) {
        // 懒加载指令逻辑
        app.directive('img-lazy',{
            mounted(el, bingding) {
                // el:指令绑定的那个元素img
                // binding:bingding.value 指令等于号后面绑定的表达式的值 图片URL
                console.log(el,bingding.value)

                const {stop}=useIntersectionObserver(
                    el,
                    ([{isIntersecting}])=>{
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src=bingding.value
                            // 停止监听
                            stop()
                        }
                    }
                )
            },
        })
    },
}