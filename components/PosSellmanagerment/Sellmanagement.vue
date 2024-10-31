<template>
  <a-flex class="justify-between pb-4">
    <a-typography class="font-semibold text-[22px] text-[#4B465C]">
      POS Sell Management
    </a-typography>
    <a-flex>
      <a-typography class="text-lg m-auto text-[#005C94]">
        Today :
        {{ currentDate }}
        <!-- Displaying the date -->
      </a-typography>
    </a-flex>
  </a-flex>
  <a-row :gutter="[16, 24]">
    <a-col :span="8" v-for="(Item, index) in card" :key="index">
      <a-card :bodyStyle="{ padding: '10px 20px 10px 20px' }">
        <a-row class="flex justify-between">
          <a-flex class="flex-col gap-2">
            <a-typography class="text-base font-normal text-[#4B465C]">
              {{ Item.title }}
            </a-typography>
            <a-typography class="text-2xl font-semibold text-[#4B465C]">
              {{ Item.currency }}
            </a-typography>
          </a-flex>
          <a-flex>
            <Icon class="m-auto w-10 h-10" :icon="Item.icon" />
          </a-flex>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";

// Current date ref that will update in real time
const currentDate = ref("");

// Function to update the current date every second
const updateDate = () => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  currentDate.value = now.toLocaleDateString("en-US", options);
};

// Interval to update the date every second
let interval: number;

onMounted(() => {
  updateDate(); // Initial call
  interval = window.setInterval(updateDate, 1000); // Update every second
});

onUnmounted(() => {
  clearInterval(interval); // Clean up the interval when component is unmounted
});
const card = ref([
  {
    title: " Income Tota ",
    currency: " ៛ 21,459.0 ",
    icon: "tabler:file-dollar",
  },
  {
    title: " Income Case  ",
    currency: " $ 21,459.0 ",
    icon: "tabler:file-dollar",
  },
  {
    title: "  Total Order ",
    currency: " 459 ",
    icon: "tabler:file-dollar",
  },
  {
    title: " Total Case ",
    currency: " ៛  21,459.0 ",
    icon: "tabler:file-dollar",
  },
  {
    title: "Tota Case ",
    currency: "$ 21,459.0  ",
    icon: "tabler:file-dollar",
  },
  {
    title: " Total Online (Visa & KHQR) ",
    currency: " $ 21,459.0 ",
    icon: "tabler:file-dollar",
  },
]);
</script>
