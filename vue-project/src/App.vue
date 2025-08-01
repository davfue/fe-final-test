<template>
  <div>
    <WebHeader></WebHeader>
    <HomePage></HomePage>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script setup>
  import HomePage from '@/components/pages/HomePage.vue';
  import WebHeader from '@/components/header/WebHeader.vue';
</script>