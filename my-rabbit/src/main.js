import './assets/main.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'
import {lazyPlugin} from "@/directives";

// 引入全局组件插件
import {componentPlugin} from "@/components"

const app = createApp(App)

// 注册持久化插件
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(createPinia())
app.use(pinia)

app.use(router)
// 引入懒加载指令插件并且注册
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')