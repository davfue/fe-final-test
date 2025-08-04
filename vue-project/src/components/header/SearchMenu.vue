<template>
  <div
    class="header__searchbar input-group align-items-center border rounded-2 d-flex"
  >
    <span class="ps-2 d-none d-sm-block">
      <Search/>
    </span>
    <input
      type="text"
      class="form-control border-0 rounded-2 "
      placeholder="Search for Items"
      style="min-width: 20px;"
    />
  </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next';
</script>
