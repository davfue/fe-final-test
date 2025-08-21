<template>
    <div class="container-fluid pt-5 my-5" style="background-color: rgb(255,255,255);">
        <div style="background-color: white; width: 450px; height: fit-content; border-radius: 15px; box-shadow: 0 0 5px rgba(0,0,0,0.2)"
            class="py-3 px-4 m-auto login-form">
            <div class="justify-content-between d-flex align-items-center mb-2">
                <h5>Log in to vintage</h5>
                <router-link to="/"><X style="color: black;"/></router-link>
            </div>
            <p class="mb-0">Enter your details below</p>
            <form @submit.prevent="login">
                <div class="mt-4">
                    <BaseInput type="text" identity="email" placeholder="Your username" label="Email"
                        v-model="loginData.email"></BaseInput>
                </div>
                <div class="mb-4 mt-4">
                    <BaseInput type="password" identity="password" placeholder="Your Password" label="Password"
                        v-model="loginData.password"></BaseInput>
                </div>
                <BaseButton class="w-100 mt-3 py-2" style="background-color: #009499; color: white;">Continue</BaseButton>
            </form>
        </div>
    </div>
</template>

<script setup>
    import BaseInput from "@/components/ui/BaseInput.vue";
    import BaseButton from "@/components/ui/BaseButton.vue";
    import {
        reactive
    } from "vue";
    import {
        useStore
    } from "vuex";
    import {
        useRouter
    } from "vue-router";
    import { X } from 'lucide-vue-next';

    const store = useStore();
    const router = useRouter();

    const loginData = reactive({
        email: "",
        password: "",
        isLogin: true,
    });

    const login = async () => {
        await store.dispatch("auth/getLoginData", loginData);
        router.push("/");
    };
</script>
