<template>
  <div style="background-color: white" class="m-5 p-5 d-flex">
    <UserMenu @changeComponent="$router.push($event)"></UserMenu>
    <component :is="component[getRoute]"></component>
  </div>
</template>

<script setup>
import UserMenu from "@/components/user/UserMenu.vue";
import ProfileDetails from "@/components/user/ProfileDetails.vue";
import ChangePassword from "@/components/user/ChangePassword.vue";
import TransactionHistory from "@/components/user/TransactionHistory.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const component = {
  "profile-details": ProfileDetails,
  "change-password": ChangePassword,
  "transaction-history": TransactionHistory,
}

const getRoute = computed(() => {
  return route.params.component
})

</script>