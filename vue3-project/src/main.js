import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// createApp == new Vue() 创建一个应用实例对象
// 1.以App作为参数生成一个应用实例对象
// 2.挂在到id为app的节点上
createApp(App).mount('#app')
