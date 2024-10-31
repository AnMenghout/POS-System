<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <a-row :gutter="[20, 20]">
    <a-col :span="16">
      <a-flex vertical gap="16">
        <HomeCategory />
        <HomeProduct />
      </a-flex>
    </a-col>
    <a-col :span="8">
      <HomeOrderBill />
    </a-col>
  </a-row>
</template>

<style scoped></style>
