<template>
  <div class="header__navbar align-items-center d-flex gap-1 gap-sm-2" style="width: fit-content;">
    <!-- <LoginMenu></LoginMenu>
    <SignupMenu></SignupMenu> -->
    <ProfileMenu></ProfileMenu>
  </div>
</template>

<script setup>
  import LoginMenu from "@/components/header/LoginMenu.vue";
  import SignupMenu from "@/components/header/SignupMenu.vue";

  import ProfileMenu from "@/components/header/ProfileMenu.vue";
</script>