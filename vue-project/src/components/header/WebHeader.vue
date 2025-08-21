<template>
  <header class="shadow-sm container-fluid bg-white py-2 border-bottom fixed-top">
    <div class="container-md d-flex justify-content-between align-items-center gap-2 gap-md-3 gap-lg-4">
      <router-link to="/" class="d-none d-md-block">
          <img src="@/assets/images/logo.png" alt="Logo" class="logo-image"></img>
      </router-link>
        <SearchMenu v-if="route.name !== 'login' && route.name !== 'signup'"></SearchMenu>
        <NavigationBar v-if="route.name !== 'login' && route.name !== 'signup'"></NavigationBar>
      <LanguageMenu></LanguageMenu>
    </div>
  </header>
  <ModalLogout></ModalLogout>
</template>

<script setup>
import NavigationBar from '@/components/header/NavigationBar.vue';
import SearchMenu from "@/components/header/SearchMenu.vue";
import LanguageMenu from "@/components/header/LanguageMenu.vue";
import ModalLogout from "@/components/header/ModalLogout.vue";
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style>
.logo-image {
  height: 32px;
}

.logo-text {
  font-size: 25px;
  margin: 0 0 0 10px;
}
</style>