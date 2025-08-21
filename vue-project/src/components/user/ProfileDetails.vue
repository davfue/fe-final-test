<template>
    <div class="card col-7">
        <div class="card-body">
            <p class="card-title">Edit Profile</p>
            <EditProfileDetails :isEdit="isEdit"></EditProfileDetails>
        </div>
    </div>
</template>

<script setup>
    import EditProfileDetails from '@/components/user/EditProfileDetails.vue';

    defineProps({
        isEdit: {
            type: Boolean,
            default: false
        },
    })
</script>
