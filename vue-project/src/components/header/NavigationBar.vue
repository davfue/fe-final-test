<template>
  <div class="header__navbar justify-content-end align-items-center d-flex gap-4" style="width: 450px;">
    <LoginMenu></LoginMenu>
    <SignupMenu></SignupMenu>
  </div>
</template>

<script setup>
  import LoginMenu from "@/components/header/LoginMenu.vue";
  import SignupMenu from "@/components/header/SignupMenu.vue";
</script>