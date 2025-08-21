<template>
    <div class="m-5 pt-4 px-5">
        <div class="d-flex justify-content-between">
            <div class="ms-3 col-7">
                <img src="@/assets/images/Nike1.avif" style="width: 100%;"></img>
                <div class="d-none d-md-block mt-5">
                    <h4 class="mb-4">Other Product</h4>
                    <div>
                        <section
                            class="col-12 container-fluid p-0 d-flex justify-content-left position-relative mb-5 gap-2"
                            style="height: auto">
                            <ProductList :products="productList" v-if="productListStatus"></ProductList>
                        </section>
                    </div>
                </div>
            </div>

            <div class="card me-3 col-4" style="height: fit-content;">
                <div class="card-body mx-2 mt-1">
                    <div class="d-flex justify-content-between">
                        <h3 class="card-title">Rp{{ }}</h3>
                        <Heart />
                    </div>
                    <p class="card-subtitle mb-1 mt-1 fs-5 p-0">Product name</p>
                    <ul class="d-flex justify-content-left p-0 mt-2" style="color:#616161">
                        <li type="none" class="me-4">Size</li>
                        <li class="me-4 ms-1">Quality</li>
                        <li class="ms-1">Location</li>
                    </ul>
                    <hr class="my-4">
                    </hr>
                    <p class="card-text mb-2" style="color: #404040">Item Description</p>
                    <p class="card-text mb-4 col-11">Size Xl but fits more like M looser fit has a few minor marks
                        (pictured)
                    </p>

                    <div class="d-flex mb-4">
                        <p class="m-0 col-7">Category</p>
                        <p style="color: #404040" class="mb-0">category{{ }}</p>
                    </div>
                    <div class="d-flex mt-0 mb-4">
                        <p class="m-0 col-7">Size</p>
                        <p style="color: #404040" class="mb-0">size{{ }}</p>
                    </div>
                    <div class="d-flex mt-0 mb-4">
                        <p class="m-0 col-7">Condition</p>
                        <p style="color: #404040" class="mb-0">condition{{ }}</p>
                    </div>
                    <div class="d-flex mt-0 mb-4">
                        <p class="m-0 col-7">Color</p>
                        <p style="color: #404040" class="mb-0">color{{ }}</p>
                    </div>
                    <div class="d-flex mt-0 mb-4">
                        <p class="m-0 col-7">Uploaded</p>
                        <p style="color: #404040" class="mb-0">uploaded{{ }}</p>
                    </div>
                    <div class="d-flex mt-0 mb-4">
                        <p class="m-0 col-7">Shipping</p>
                        <p style="color: #404040" class="mb-0">shipping{{ }}</p>
                    </div>
                    <hr class="my-4">
                    </hr>
                    <BaseButton class="d-block py-2 rounded-2 mb-3"
                        style="width: 100%; color:white; background-color: #009499; border:1px solid #009499">Buy
                        Now</BaseButton>
                    <BaseButton
                        class="py-2 rounded-2"style="width: 100%; color: #009499; background-color: white; border:1px solid #009499">Add
                        to Cart</BaseButton>
                    <hr class="my-4">
                    </hr>
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-left">
                                <img src="@/assets/images/profilephoto.png" height="50" width="50"
                                    class="rounded-circle me-3"></img>
                                <div>
                                    <p class="mb-0 fw-semibold">Jack on the corner</p>
                                    <div class="mt-0 d-flex">
                                        <Star fill="yellow" style="color: yellow; width: 20px;" class="me-1" />
                                        <Star fill="yellow" style="color: yellow;width: 20px;" class="me-1" />
                                        <Star fill="yellow" style="color: yellow;width: 20px;" class="me-1" />
                                        <Star fill="yellow" style="color: yellow;width: 20px;" class="me-1" />
                                        <Star fill="yellow" style="color: yellow; width: 20px;" class="me-2" />
                                        <p style="color: #616161;margin:0;">(110)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
    import {
        Heart
    } from 'lucide-vue-next';
    import {
        Star
    } from 'lucide-vue-next';
    import ProductList from "@/components/product/ProductList.vue";
    import {
        onMounted,
        ref
    } from "vue";
    import {
        useStore
    } from "vuex";

    const store = useStore();
    const productListStatus = ref(false);
    const productList = ref();

    onMounted(async () => {
        try {
            await store.dispatch("product/getProductData");
            productListStatus.value = true;
            productList.value = store.state.product.products;
        } catch (error) {
            console.log(error);
        }
    });
</script>
