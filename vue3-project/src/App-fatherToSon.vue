<script setup>
// setup语法糖下局部组件无需注册直接可以使用
import SonCom from "@/son-com.vue";
import {ref} from "vue";

const count = ref(100);

setTimeout(()=>{
  count.value = 200;
},3000)
</script>

<template>
  <div class="father">
    <h2>父组件App</h2>

<!--    1. 绑定属性 传递响应式数据-->
    <SonCom :count="count" message="father message"/>
  </div>
</template>