<script setup>
import {onMounted, ref} from "vue";
import TestCom from "@/test-com.vue";

/**
 * 1.获取模板引用的时机是什么?
 *    组件挂在完毕
 * 2. defineExpose编译宏的作用时什么？
 *    显示暴露组件内部的属性和方法
 * @type {null}
 */
// 1.调用ref函数 ---> ref对象
  const h1Ref = ref(null);
  const testRef = ref(null);

  // 组件挂在完毕过后才能获取
onMounted(()=>{
  console.log(h1Ref.value)
  console.log(testRef.value)
})
</script>

<template>
<!--  2.通过ref标识绑定ref对象-->
  <h1 ref="h1Ref">我是dom标签h1</h1>
  <TestCom ref="testRef"/>
</template>