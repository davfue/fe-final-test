<template>
  <section
    class="container-fluid col-12 align-items-center p-0 position-relative mb-5"
  >
    <img
      src="@/assets/images/Hero.jpg"
      class="img-fluid object-fit-cover"
      style="width: 100%; height: 576px"
    />
    <div
      class="card position-absolute m-auto"
      style="width: 285px; top: 230px; left: 100px"
    >
      <div class="card-body">
        <h4 class="card-title mb-4" style="line-height: 33px; width: 200px">
          Ready to declutter you closet?
        </h4>
        <button
          class="btn"
          style="width: 100%; background-color: #009499; color: white"
        >
          Shop Now
        </button>
      </div>
    </div>
  </section>

  <section class="mx-5 px-5">
    <div class="mb-4 col-12 d-flex justify-content-between">
      <h3 class="ms-3">Popular Items</h3>
    </div>

    <div
      class="col-12 container-fluid p-0 d-flex justify-content-between position-relative mb-5"
      style="height: auto"
    >
      <ProductList
        :products="topItem"
        v-if="productListStatus"

      ></ProductList>
      <router-link to="/allitems" class="text-decoration-none">
        <div
          class="card d-flex rounded-1 me-2"
          style="
            background-color: #ebfeff;
            width: 170px;
            height: 100%;
            border: 1px solid #c2fafd;
          "
        >
          <p class="m-auto" style="color: #009499">See All Products</p>
        </div>
      </router-link>
    </div>

    <div class="mb-4 col-12 d-flex mb-0">
      <h3 class="ms-3 mb-0">Shop by Brand</h3>
    </div>

    <div
      class="col-12 container-fluid p-0 d-flex justify-content-evenly position-relative mb-5 gap-0"
      style="height: auto"
    >
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Vans
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Bohoo
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Mango
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Reebok
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Converse
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Sandro
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Nike
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Adidas
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Dior
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Puma
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Zara
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        Bershka
      </button>
      <button
        class="px-3 py-1 rounded-2"
        style="border: 1px solid gray; font-size: 13px; background-color: white"
      >
        American Eagle
      </button>
    </div>

    <div class="mb-4 col-12 d-flex justify-content-between">
      <h3 class="ms-3">New Product</h3>
    </div>

    <div
      class="col-12 container-fluid p-0 d-flex justify-content-between position-relative mb-5"
      style="height: auto"
    >
      <ProductList
        :products="topItem"
        v-if="productListStatus"
      ></ProductList>
      <router-link to="/allitems" class="text-decoration-none">
        <div
          class="card d-flex rounded-1 me-2"
          style="
            background-color: #ebfeff;
            width: 170px;
            height: 100%;
            border: 1px solid #c2fafd;
          "
        >
          <p class="m-auto" style="color: #009499">See All Products</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import ProductList from "@/components/product/ProductList.vue";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const productListStatus = ref(false);
const productList = ref([]);
const topItem = ref([]);

onMounted(async () => {
  try {
    await store.dispatch("product/getProductData");
    productListStatus.value = true;
    // productList.value = store.state.product.products;
    const products = Object.values(store.state.product.products || {});
    productList.value = products;
    topItem.value = [...products]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  } catch (error) {
    console.log(error);
  }
});

// const topItem = computed(() => {
//     [...productList.value].sort((a, b) => new Date(b.date) - (new Date(a.date)))
//         .slice(0, 5)
// })
</script>
