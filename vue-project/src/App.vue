<template>
  <div>
    <WebHeader></WebHeader>
    <HomePage style="height: 500px;"></HomePage>
    <!-- <router-view></router-view> -->
     <WebFooter></WebFooter>
  </div>
</template>

<script setup>
  import HomePage from '@/components/pages/HomePage.vue';
  import WebHeader from '@/components/header/WebHeader.vue';
  import WebFooter from '@/components/footer/WebFooter.vue';
</script>