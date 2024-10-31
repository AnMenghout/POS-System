<template>
  <!-- <ButtonModalComponent :checked="checked" @updateChecked="updateChecked" />
  <TableComponent :isTableEnabled="checked" /> -->
  <Banknote :checked="checked" @updateChecked="updateChecked" class="pb-4" />

  <BalanceKHR :isTableEnabled="checked" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
import { ref } from "vue";
import BalanceKHR from "~/components/Balance/BalanceKHR.vue";
import Banknote from "~/components/Balance/Banknote.vue";

const checked = ref(false);

const updateChecked = (value) => {
  checked.value = value;
};
</script>
