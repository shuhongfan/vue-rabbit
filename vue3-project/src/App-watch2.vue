<script setup>
import {ref, watch} from "vue";

const count = ref(0);
const changeCount=()=>{
  count.value++;
}

const name = ref('new');
const changeName=()=>{
  name.value+='+'
}

// watch监听多个数据源  将单个参数变为数组
watch([count,name],([newCount,newName],[oldCount,oldName])=>{
  console.log('count或者name变化了',[newCount,newName],[oldCount,oldName]);
})
</script>

<template>
  <div>
    <button @click="changeCount">{{count}}</button>
  </div>

  <div>
    <button @click="changeName">{{name}}</button>
  </div>
</template>