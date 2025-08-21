<template>
  <router-link to="/login">
    <BaseButton class="login-button rounded-2">
      Login
    </BaseButton>
  </router-link>
    <router-link to="/signup">
    <BaseButton class="signup-button rounded-2">
      Signup
    </BaseButton>
  </router-link>
</template>

<script setup>
  import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<style>
.login-button {
  color: #009499 !important;
  background-color: none;
  border: #009499 1px solid !important;
}

.signup-button {
  color: white !important;
  background-color: #009499 !important;
  border: #009499 1px solid !important;
}
</style>
