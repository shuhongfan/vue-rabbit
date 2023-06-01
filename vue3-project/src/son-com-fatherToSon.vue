<script setup>
// 2. defineProps接收数据
const props = defineProps({
  message: String,
  count:Number
});
console.log(props)

</script>

<template>
  <div class="son">
    <h3>子组件SON</h3>
    <div>
      父组件传入的数据--{{message}}---{{count}}
    </div>
  </div>
</template>
