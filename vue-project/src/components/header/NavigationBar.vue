<template>
  <div
    class="header__navbar align-items-center d-flex gap-1 gap-sm-2"
    style="width: fit-content"
  >
    <!-- <AuthMenu></AuthMenu> -->
    <!-- <ProfileMenu></ProfileMenu> -->
    <component :is="components[menuComponent]"></component>
  </div>
</template>

<script setup>
import AuthMenu from "@/components/header/AuthMenu.vue";
import ProfileMenu from "@/components/header/ProfileMenu.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

const menuComponent = ref("auth-menu");
const store = useStore();

const components = {
  "auth-menu": AuthMenu,
  "profile-menu": ProfileMenu,
};

const getToken = computed(() => {
  return store.state.auth.token;
  
});

watch(getToken, (newValue, oldValue) => {
  if (!newValue) {
    menuComponent.value = "auth-menu";
  } else {
    menuComponent.value = "profile-menu";
  }
})

if (!getToken.value) {
  menuComponent.value = "auth-menu";
} else {
  menuComponent.value = "profile-menu";
}
</script>
