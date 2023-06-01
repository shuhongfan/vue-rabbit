<script setup>
// 1.导入函数
import {reactive} from "vue";

// 2. 执行函数 传入一个对象类型的参数 变量接收
// reactive() 接受对象类型数据的参数传入并返回一个响应式对象
// ref() 接收简单类型或者对象类型的数据传入并返回一个响应式的对象
const state=reactive({
  count: 0,
})

const setCount = () => {
  state.count++;
};

</script>

<template>
  <div>
    <button @click="setCount">{{state.count}}</button>
  </div>
</template>