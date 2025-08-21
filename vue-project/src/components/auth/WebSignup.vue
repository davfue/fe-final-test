<template>
    <div class="container-fluid py-5 mt-5" style="background-color: white">
        <div style="background-color: white; width: 450px; height: fit-content; border-radius: 15px; box-shadow: 0 0 5px rgba(0,0,0,0.2)"
            class="py-3 px-4 m-auto signup-form">
            <div class="justify-content-between d-flex align-items-center mb-2">
              <h5>Sign up</h5>
              <router-link to="/"><X style="color: black;"/></router-link>
            </div>
            <p class="mb-0">Enter your details below</p>
            <form class="mt-0" @submit.prevent="register">
                <div class="mt-3">
                    <BaseInput type="text" identity="fullname" placeholder="Enter your fullname" label="Full name"
                        v-model="signupData.fullname"></BaseInput>
                </div>
                <div class="mt-3">
                    <BaseInput type="text" identity="username" placeholder="Enter your username" label="Username"
                        v-model="signupData.username"></BaseInput>
                </div>
                <div class="mt-3">
                    <BaseInput type="email" identity="email" placeholder="Enter your email" label="Email"
                        v-model="signupData.email"></BaseInput>
                </div>
                <div class="mt-3">
                    <BaseInput type="password" identity="password" placeholder="Enter your password" label="Password"
                        v-model="signupData.password" @keyInput="passwordCheck"></BaseInput>
                    <p class="text-danger mt-1 fw-medium" style="font-size: 11px"
                        :style="{ display: passwordStatusDisplay }">
                        The password field must be at least 8 characters
                    </p>
                </div>
                <div class="mt-3">
                    <BaseInput type="password" identity="confirmationPassword" placeholder="Enter your password"
                        label="Confirmation Password" v-model="signupData.confirmationPassword"
                        @keyInput="confirmationPasswordCheck"></BaseInput>
                    <p class="text-danger mt-1 fw-medium" style="font-size: 11px"
                        :style="{ display: confirmPasswordDoesNotMatch }">
                        The password confirmation does not match
                    </p>
                    <p class="text-success mt-1 fw-medium" style="font-size: 11px"
                        :style="{ display: confirmPasswordMatch }">
                        The password confirmation does match
                    </p>
                </div>
                <div class="d-flex align-items-start mt-3">
                    <input type="checkbox" class="rounded-pill me-2 mt-2"></input>
                    <p class="" style="width: 320px; text-align: justify; font-size: 15px;">By clicking sign up, I hereby agree and consent to <span style="color: #009499; cursor: pointer;">Term & Conditions</span>; I confirm that I have read <span style="color: #009499; cursor: pointer;">Privacy policy</span>.</p>
                </div>
                <BaseButton class="w-100 mt-3 py-2" style="background-color: #009499; color: white;">Sign up</BaseButton>
            </form>
        </div>
    </div>
    <ModalRegister></ModalRegister>
</template>

<script setup>
    import BaseInput from "@/components/ui/BaseInput.vue";
    import BaseButton from "@/components/ui/BaseButton.vue";
    import {
        reactive,
        ref
    } from "vue";
    import {
        useStore
    } from "vuex";
    import {
        useRouter
    } from "vue-router";
    import { X } from 'lucide-vue-next';
    import ModalRegister from "@/components/header/ModalRegister.vue";

    const store = useStore();
    const router = useRouter();

    const signupData = reactive({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmationPassword: "",
        isLogin: false,
        imageLink: "",
    })

    const passwordStatusDisplay = ref("none")

    const passwordCheck = () => {
        if (signupData.password.length < 8) {
            passwordStatusDisplay.value = "block"
        } else {
            passwordStatusDisplay.value = "none"
        }
    }

    const confirmPasswordDoesNotMatch = ref("none");
    const confirmPasswordMatch = ref("none");

    const confirmationPasswordCheck = () => {
        if (signupData.confirmationPassword === "") {
            confirmPasswordDoesNotMatch.value = "none";
            confirmPasswordMatch.value = "none";
            return;
        }

        if (signupData.password !== signupData.confirmationPassword) {
            confirmPasswordDoesNotMatch.value = "block";
            confirmPasswordMatch.value = "none";
            return;
        }

        confirmPasswordDoesNotMatch.value = "none";
        confirmPasswordMatch.value = "block";
    };

    // const checkImage = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);

    //     reader.addEventListener("load", () => {
    //         signupData.imageLink = reader.result;
    //     });
    // };

    const register = async() => {
    if (
      signupData.password !== signupData.confirmationPassword ||
      signupData.password.length < 8
    ) {
      signupData.confirmationPassword = "";
      signupData.password = "";
      confirmPasswordDoesNotMatch.value = "none";
      confirmPasswordMatch.value = "none";
    } else {
      console.log("Register Data: ", signupData);
      
      await store.dispatch("auth/getRegisterData", signupData);
    //  manggil modal register
    }
  }
</script>


<style>
input[type="checkbox"] {
  accent-color: #009499; 
  width: 20px;
    height: 20px;
    cursor: pointer;
}
</style>