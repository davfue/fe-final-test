<template>
    <div class="modal fade" id="modalLogout" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 400px; height: 166px;">
                <div class="modal-header border-0 p-0 mt-3 mx-4 mb-2">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Logout</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0 mx-4">
                    <p>Are you sure want to logout from vintage?</p>
                </div>
                <div class="modal-footer border-0 py-2" style="background-color: #F5F5F5">
                    <BaseButton type="button" class="btn btn-secondary border-0" data-bs-dismiss="modal" style="background-color: #EDEDED; color: #404040; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2)">Close</BaseButton>
                    <BaseButton type="button" class="btn border-0 mx-2" data-bs-dismiss="modal" @click="logout" style="background-color: #CB3A31; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); color:white;">Logout</BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {
        useRouter
    } from "vue-router"
    import {
        useStore
    } from "vuex"
    import BaseButton from "@/components/ui/BaseButton.vue";

        const store = useStore()
    const router = useRouter()

    const logout = () => {
        store.commit("auth/setUserLogout")
        router.push("/")
    }
</script>
