<template>
    <div class="header__signup col-8 col-sm-4 fw-semibold d-flex justify-content-evenly align-items-center text-decoration-none gap-2"
        style="text-align: right">
        <div class="position-relative me-1">
            <p class="badgee">1</p>
            <ShoppingCart style="color: #616161;" />
        </div>
        <div class="position-relative ms-2">
            <p class="badgee">1</p>
            <Heart style="color: #616161;" />
        </div>
        <ul class="navbar-nav ms-4">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    <img width="36" height="36" class="rounded-circle me-2" style="object-fit: cover"
                        src="@/assets/images/profilephoto.png"></img>
                </a>
                <ul class="dropdown-menu" style="width: 200px;">
                    <router-link to="/user/profile-details" class="dropdown-item" style="font-size: 17px;">
                        <User class="me-2" />Profile
                    </router-link>
                    <router-link to="/" class="dropdown-item" style="font-size: 17px;">
                        <ScrollText class="me-2" />Order
                    </router-link>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modalLogout"
                        style="color: #CB3A31; font-size: 17px;">
                        <LogOut class="me-2" />Logout
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup>
    // import {
    //     useRouter
    // } from "vue-router"
    // import {
    //     useStore
    // } from "vuex"
    import {
        ShoppingCart,
        Heart,
        User,
        ScrollText,
        LogOut
    } from 'lucide-vue-next';

    // const store = useStore()
    // const router = useRouter()

    // const logout = () => {
    //     store.commit("auth/setUserLogout")
    //     router.push("/")
    // }
</script>

<style>
    .badgee {
        position: absolute;
        top: -5px;
        right: -9px;
        background-color: #CB3A31;
        color: white;
        width: 18px;
        height: 18px;
        border-radius: 20px;
        text-align: center;
        margin: 0;
        padding: 1px 0 0 0px;
        font-size: 10px;
    }

    .dropdown-item:hover {
        background-color: #c4c4c4;
    }
</style>
