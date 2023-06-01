<script setup>
// 原始响应式数据
// 1.导入computed
import {ref,computed} from "vue";

const list = ref([1, 2, 3, 4, 5, 6, 7, 8]);

// 2. 执行函数,return计算之后的值 变量接收
const computedList = computed(() => {
  // 做计算,根据一个数据计算得到一个新的数据
  return list.value.filter(item => item > 2);
});

// 3. 计算属性,数据修改后,重新计算
setTimeout(() => {
  list.value.push(9, 10);
}, 3000);
</script>


<template>
  <div>原始响应式数据- {{list}}</div>
  <div>计算属性响应式数据- {{computedList}}</div>
</template>