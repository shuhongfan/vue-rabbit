<script setup>

import HomeCategory from "@/views/Home/componets/HomeCategory.vue";
import HomeBanner from "@/views/Home/componets/HomeBanner.vue";
import HomeNew from "@/views/Home/componets/HomeNew.vue";
import HomeHot from "@/views/Home/componets/HomeHot.vue";
import HomeProduct from "@/views/Home/componets/HomeProduct.vue";
import HomePanel from "@/views/Home/componets/HomePanel.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />

<!--  测试面板组件-->
<!--  <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品">-->
<!--    <div>好多商品</div>-->
<!--  </HomePanel>-->
<!--  <HomePanel title="人气推荐" sub-title="新鲜好物 好多商品">-->
<!--    <div>好多商品</div>-->
<!--  </HomePanel>-->
</template>

<style scoped lang="scss">

</style>