<script setup>
// 生命周期函数的使用
// 1.引入函数
import {onMounted} from "vue";

// 2. 执行函数,传入回调
onMounted(()=>{
  console.log('组件挂载完毕mounted执行了1')
  // 好多代码
})

onMounted(()=>{
  console.log('组件挂载完毕mounted执行了3')
  // 逻辑补充
})

/**
 * 1.组合式API中生命周期的格式是什么？
 *    on+生命周期名字
 * 2.组合式API中可以使用onCreated吗？
 *    没有这个钩子函数，直接写到setup中
 * 3.组合式API中组件卸载完毕时执行那个函数？
 *    onUnmounted
 */
onMounted(()=>{
  console.log('组件挂载完毕mounted执行了2')
})
</script>

<template>
  <div>

  </div>
</template>