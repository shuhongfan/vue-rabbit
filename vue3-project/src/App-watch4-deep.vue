<script setup>
import {ref, watch} from "vue";

const state = ref({count: 0, age: 20});
const changeStateByCount=()=>{
  // 直接修改count
  state.value.count++;
}

// deep 深度监听
watch(state,()=>{
  console.log('count变化了');
},{
  deep: true // deep会进行遍历,尽量不开启deep
})
</script>

<template>
    <div>
      {{state.count}}
      <button @click="changeStateByCount">通过count修改</button>
    </div>
</template>