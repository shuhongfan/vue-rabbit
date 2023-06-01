<script setup>
// 1.导入函数
import {ref} from "vue";

// 2. 执行函数 传入一个对象类型的参数 变量接收
// ref() 接收简单类型或者对象类型的数据传入并返回一个响应式的对象
/**
 * 1.reactive和ref函数的共同作用是什么?
 *    用函数调用的方式生成响应式数据
 *
 * 2. reactive vs ref
 *    1.reactive不能处理简单类型的数据
 *    2.ref参数类型支持更好但是必须通过.value访问修改
 *    3.ref函数的内部实现依赖reactive函数
 *
 * 3. 在实际工作中推荐使用哪个?
 *    推荐使用ref函数,更加灵活
 * @type {Ref<UnwrapRef<number>>}
 */
const count=ref(0)
console.log(count)

const setCount = () => {
  // 脚本区域修改ref产生的响应式对象数据 必须通过.value书写
  count.value++;
};

</script>

<template>
  <div>
    <button @click="setCount">{{count}}</button>
  </div>
</template>