<template>
    <div class="card col-2 ms-2 p-0 border-0" style="min-height: 200px" v-for="product in products">
      <img :src="product.images" class="card-img-top rounded-0" />
      <div class="card-body pe-0 ps-1 pb-0">
        <p class="card-text mb-1 fs-6" style="color: #0D6B6F">
          Rp{{ product.price }}
        </p>
        <p
          class="card-text mb-1"
          style="width: 100%; line-height: 16px; font-size: 13px; color: #404040"
        >
          {{ product.name }}
        </p>
      </div>
      <div class="card-footer p-1" style="background-color: white; border: none">
        <div
          class="d-flex justify-content-between"
          style="width: 100%; color: #616161"
        >
          <p class="card-text pb-0 mb-0" style="font-size: 13px">{{ product.size }}</p>
          <p class="me-1 pb-0 mb-0" style="font-size: 13px">
            <span><i class="fa-regular fa-heart"></i></span>
            12
          </p>
        </div>
      </div>
    </div>
</template>

<script setup>
defineProps({
  products: Array,
});
</script>
