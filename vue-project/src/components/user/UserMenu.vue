<template>
  <div class="ms-lg-3">
    <h3>Settings</h3>
    <div>
      <ul class="list-unstyled">
        <li @click="menuClicked('profile-details')" class="ms-3 mt-4 user-menu">
          Profile Details
        </li>
        <li @click="menuClicked('change-password')" class="ms-3 mt-4 user-menu">
          Change Password
        </li>
        <li @click="menuClicked('transaction-history')" class="ms-3 mt-4 user-menu">
          Transaction History
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const emit = defineEmits(['changeComponent'])

const menuClicked = option => {
  emit('changeComponent', option)
}

const store = useStore();
const userData = computed(() => {
  return store.state.auth.userLogin;
});
</script>

<style scoped>
.user-menu:hover {
  cursor: pointer;
}

.active-color {
  color: #4c4ddc;
}

.inactive-color {
  color: #404040;
}
</style>