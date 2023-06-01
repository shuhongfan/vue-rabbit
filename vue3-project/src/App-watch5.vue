<script setup>
import {ref, watch} from "vue";

const state = ref({
  name: 'chaichai',
  age: 18
});

const changeName=()=>{
  state.value.name = 'caicai-teacher';
}

const changeAge=()=>{
  state.value.age = 20;
}

// 精确侦听某个具体属性
watch(()=>state.value.age,()=>{
  console.log('age变化了')
})
/**
 * 1.作为watch函数的第一个参数,ref对象需要添加.value吗?
 *     不需要,watch会自动读取
 * 2. watch只能监听单个数据吗?
 *    单个或者多个
 * 3. 不开启deep,直接修改嵌套属性能触发回调吗?
 *    不能,默认是浅层监听
 * 4. 不开启deep,想在某个层次比较深的属性变化时执行回调怎么做?
 *    可以把第一个参数写成函数的写法,返回要监听的具体属性
 */
</script>

<template>
    <div>
      <div>当前name---{{state.name}}</div>
      <div>当前age--{{state.age}}</div>
      <div>
        <button @click="changeName">修改name</button>
        <button @click="changeAge">修改age</button>
      </div>
    </div>
</template>