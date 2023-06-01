<script setup>
// 2.通过defineEmits -> emit(this.$emit)
const emit = defineEmits(['get-message']);

const sendMsg = () => {
  emit('get-message', 'this is son message')
};
</script>

<template>
  <div class="son">
    <h3>子组件SON</h3>
    <button @click="sendMsg">触发自定义事件</button>

  </div>
</template>
