<script setup>
import {ref, watch} from "vue";

  const count = ref(0);

  const setCount=()=>{
    count.value++;
  }

  // watch立即执行
  watch(count,()=>{
    console.log('count变化了');
  },{
    immediate: true, // 第一次监听时先执行一次
  })
</script>

<template>
    <div>
      <button @click="setCount">{{count}}</button>
    </div>
</template>