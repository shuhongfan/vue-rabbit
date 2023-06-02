import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// 导入对应包
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
    // 配置插件
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [
                // 1.配置elementPlus采用scss样式配色系统
                ElementPlusResolver({importStyle: "sass"})
            ],
        }),
        // 按需定制主题配置
        ElementPlus({
            useSource: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 2.自动导入定制化样式文件进行样式覆盖
                additionalData: `
                      @use "@/styles/element/index.scss" as *;
                      @use "@/styles/var.scss" as *;
        `,
            }
        }
    }
})
