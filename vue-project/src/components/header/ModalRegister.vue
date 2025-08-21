<template>
<div class="modal fade" id="modalRegister" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog d-flex justify-content-center mt-5 pt-5">
    <div class="modal-content" style="width: 350px; height: fit-content;">
      <div class="modal-body text-center">
        <img src="@/assets/images/SuccessRegister.png" width="190" class="mt-4 mb-4"></img>
        <p class="fs-4 fw-semibold mb-1">Successfully Register</p>
        <p style="color: #616161;" class="mb-4">Thank you for register at vintage. Start find your favorite pre-loved product here.</p>
                <button style="background-color: #009499; color: white; width: 100%;" type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="goToHome()">Go to Home Page</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
    import {
        useRouter
    } from "vue-router";

    const router = useRouter();

const goToHome = async() => {
  router.push("/");
};
</script>