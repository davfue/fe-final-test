<template>
  <div class="mx-5 px-5">
    <div class="mb-4 mt-5 col-12 d-flex justify-content-between">
      <h3 class="ms-3 mt-5">Items</h3>
    </div>

    <section
      class="col-12 container-fluid p-0 d-flex justify-content-left position-relative mb-5 gap-2 row"
      style="height: auto"
    >
      <ProductList
        :products="productList"
        v-if="productListStatus"
      ></ProductList>
    </section>
  </div>
</template>

<script setup>
import ProductList from "@/components/product/ProductList.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

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
