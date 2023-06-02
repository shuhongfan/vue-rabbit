<script setup>
/**
 * 纯展示类组件通用封装思路总结
 * 1.搭建纯静态的部分，不管可变的部分
 * 2.抽象可变的部分作为组件参数
 *   非复杂的模板抽象成props，复杂的解构模板抽象为插槽
 */
// 定义props
defineProps({
  // 主标题
  title:{
    type:String
  },
  // 副标题
  subTitle:{
    type: String,
  }
})
</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <slot />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>