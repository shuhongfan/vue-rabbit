<script setup>

import SonCom from "@/son-com.vue";

const getMessage=msg=>{
  console.log(msg)
}
</script>

<template>
  <div class="father">
    <h2>父组件App</h2>

<!--    1.绑定事件-->
    <son-com @get-message="getMessage"/>
  </div>
</template>