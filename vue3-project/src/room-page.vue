<script setup>

import RoomMsgItem from "@/room-msg-item.vue";
import {provide, ref} from "vue";

/**
 * 1. provider和inject的作用是什么？
 *    跨层组件通信
 *
 * 2. 如何在传递的过程中保持数据响应式？
 *    第二个参数传递ref对象
 *
 * 3.底层组件想要通知顶层组件做修改，如何做？
 *    传递方法，底层组件调用方法
 *
 * 4. 一颗组件树只有一个顶层或底层组件吗？
 *    相对概念，存在多个顶层和底层的关系
 */
// 1. 顶层组件提供数据
provide('data-key','this is room data')

// 传递响应式数据
const count=ref(0)
provide('count-key', count);

setTimeout(()=>{
  count.value=100
},3000)

// 传递方法
const setCount=()=>{
  count.value++;
}
provide('setCount-key',setCount)
</script>

<template>
  <div>
    <RoomMsgItem/>
  </div>
</template>

<style scoped lang="scss">

</style>