<script setup>
/**
 * 1.pinia是用来做什么的？
 *    集中状态管理工具，新一代的vuex
 * 2.pinia中还需要mutation吗？
 *    不需要，action既支持同步也支持异步
 * 3.pinia如何实现getter
 *    computed计算属性函数
 * 4. pinia产生的store如何解构赋值数据保持响应式？
 *    storeToRefs
 */
// 1.导入use开头方法
import {useCounterStore} from "@/stores/counter";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";

// 2.执行方法得到store实例对象
let counterStore = useCounterStore();
console.log(counterStore)

// 直接解构赋值(响应式丢失) ,需要使用storeToRefs方法包裹
const {count,doubleCount,list} = storeToRefs(counterStore);
console.log(count,doubleCount)

// 方法直接从原来的counterStore中解构赋值
const {increment} = counterStore;

// 触发action
onMounted(()=>{
  counterStore.getList()
})
</script>

<template>
  <button @click="increment()">{{count}}</button>
  {{doubleCount}}

  <ul>
    <li v-for="item in list" :key="item.id">{{item.name}}</li>
  </ul>
</template>