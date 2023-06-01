<script setup>
import {ref, watch} from "vue";

const count = ref(0);
const setCount=()=>{
  count.value++;
}

// watch监听单个数据源
// ref对象不需要加.value
watch(count,(newValue,oldVale)=>{
  console.log('count变化了', newValue, oldVale);
})
</script>

<template>
  <div>
    <button @click="setCount">{{count}}</button>
  </div>
</template>