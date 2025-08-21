<template>
    <form class="mt-0" @submit.prevent="editUserData">
        <div class="d-flex justify-content-between align-items-center">
            <h6 class="mb-2">Photo</h6>
            <div class="d-flex align-items-center gap-3">
                <img alt="profile"></img>
                <BaseInput type="file" class="fw-medium"
                    style="background-color: #F5F5F5; color: #404040; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);"
                    @input="checkImage" identity="profileImage">
                    Choose</BaseInput>
                <p class="m-0">JPG, JPEG or PNG, 1 MB max.</p>
                <Trash2 fill="rgb(235,235,235)" style="color: grey" class="ms-5" />
            </div>
        </div>

        <hr>
        </hr>
        <div class="mt-3">
            <BaseInput type="text" identity="fullname" placeholder="Enter your fullname" label="Full name"
                v-model="userData.fullname"></BaseInput>
        </div>
        <div class="mt-3">
            <BaseInput type="text" identity="username" placeholder="Enter your username" label="Username"
                v-model="userData.username"></BaseInput>
        </div>
        <div class="mt-3">
            <BaseInput type="email" identity="email" placeholder="Enter your email" label="Email"
                v-model="userData.email"></BaseInput>
        </div>
        <BaseButton class="w-100 mt-3 py-2" style="background-color: #009499; color: white;">Update</BaseButton>
    </form>
</template>

<script setup>
    import BaseButton from '@/components/ui/BaseButton.vue';
    import BaseInput from '@/components/ui/BaseInput.vue';
    import {
        Trash2
    } from 'lucide-vue-next';
    import {
        reactive,
        ref,
        onMounted,
        computed
    } from "vue";
    import {
        useStore
    } from "vuex";
    import {
        useRoute,
        useRouter
    } from "vue-router";  

    const store = useStore();
    const route = useRoute();

    const userData = ref({
        fullname: "",
        username: "",
        email: "",
        imageLink: "",
    })


    onMounted(() => {
        userData.value = store.state.auth.userLogin;
    });

    console.log(userData.value);

    const checkImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener("load", () => {
            signupData.imageLink = reader.result;
        });
    };

    const editUserData = async () => {
            await store.dispatch("auth/editUser", {
                user: userData.value,
            });
    };

    // const props = defineProps({
    //     isEdit: {
    //         type: Boolean,
    //         default: false
    //     },
    // });
</script>
