// 把component中的所有组件都进行全局化注册
// 通过插件的方式

import XtxImageView from '@/components/ImageView/index.vue'
import XtxSku from '@/components/XtxSku/index.vue'

export const componentPlugin ={
    install(app) {
        // 全局组件注册
        app.component('XtxImageView',XtxImageView)
        app.component('XtxSku',XtxSku)
    },
}