<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
import Datamanangerment from "~/components/PosSellmanagerment/Datamanangerment.vue";
import Sellmanagement from "~/components/PosSellmanagerment/Sellmanagement.vue";
</script>

<template>
  <Sellmanagement />
  <Datamanangerment class="mt-6" />
</template>
