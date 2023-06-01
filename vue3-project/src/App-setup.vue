<script>
export default {
  /**
   * setup() 钩子是在组件中使用组合式 API 的入口
   * 1. setUp选项的执行时机
   *    beforeCreate钩子之前 自动执行
   *
   * 2. setUp写代码的特点是什么？
   *    定义数据+函数 然后以对象方式return
   *
   * 3. <script setup>解决了什么问题？
   *    经过语法糖的封装更简单的使用组合式API
   *    
   * 4. setUp中的this还指向组件实例吗？
   *    执行undefined
   * @returns {{logMessage: logMessage, message: string}}
   */
  setup() {
    console.log("setup",this)

    const message = 'this is message';
    const logMessage=()=>{
      console.log(message)
    }

    // 数据方法必须返回出去
    return{
      message,
      logMessage
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
  }
}
</script>

<template>
  <div>
    {{message}}

    <button @click="logMessage">log</button>
  </div>
</template>