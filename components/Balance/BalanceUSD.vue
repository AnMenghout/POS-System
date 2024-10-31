<!-- DollarTable.vue -->
<template>
  <a-card>
    <a-flex class="flex justify-between my-4">
      <a-typography class="text-[16px] font-sans font-semibold mt-3">
        TOTAL AMOUNT
      </a-typography>
      <a-form>
        <a-input
          v-model="inputValue"
          class="p-2 text-[#005c94] text-[20px] font-bold placeholder-custom"
          :disabled="isTableEnabled"
          :placeholder="isTableEnabled ? formattedTotal : ''"
          style="background-color: transparent"
        />
      </a-form>
    </a-flex>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      :customRow="(_, index) => ({ index })"
    >
      <template #bodyCell="{ column, record, index }">
        <a-space :class="{ 'disabled-table': !isTableEnabled }">
          <!-- TENDER TYPE -->
          <template v-if="column.dataIndex === 'tenderType'">
            <a-typography-text
              class="text-[20px] font-bold"
              style="color: #005c94"
            >
              ${{ record.tenderType }}
            </a-typography-text>
          </template>

          <!-- QTY -->
          <template v-if="column.dataIndex === 'QTY'">
            <a-flex gap="15">
              <a-flex gap="14" align="center">
                <a-button
                  @click="decrement(index)"
                  class="w-fit px-1 border-none"
                  style="background-color: #005c94"
                  :disabled="!isTableEnabled"
                >
                  <Icon
                    icon="tabler:minus"
                    width="24"
                    height="24"
                    style="color: white"
                  />
                </a-button>
                <a-typography-text class="text-xl">{{
                  record.QTY
                }}</a-typography-text>
                <a-button
                  @click="increment(index)"
                  class="w-fit px-1 border-none"
                  style="background-color: #005c94"
                  :disabled="!isTableEnabled"
                >
                  <Icon
                    icon="tabler:plus"
                    width="24"
                    height="24"
                    style="color: white"
                  />
                </a-button>
              </a-flex>
            </a-flex>
          </template>

          <!-- AMOUNT -->
          <template v-if="column.dataIndex === 'Amount'">
            <a-space>
              <a-typography-text
                class="text-[20px] font-bold"
                style="color: #005c94"
              >
                ${{ record.Amount }}
              </a-typography-text>
            </a-space>
          </template>

          <!-- ICON -->
          <template v-if="column.dataIndex === 'icon'">
            <Icon
              :icon="record.icon"
              width="24px"
              height="24px"
              style="color: gray"
              @click="removeItem(index)"
            />
          </template>
        </a-space>
      </template>
    </a-table>
  </a-card>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  isTableEnabled: Boolean, // The prop passed from the parent
});

const inputValue = ref(0);
const total = ref(0);

const data = ref([
  {
    QTY: 0,

    tenderType: 100,
    Amount: 0,
    icon: "healthicons:no",
  },
  {
    QTY: 0,

    tenderType: 100,
    Amount: 0,
    icon: "healthicons:no",
  },
  {
    QTY: 0,

    tenderType: 100,
    Amount: 0,
    icon: "healthicons:no",
  },
  {
    QTY: 0,

    tenderType: 100,
    Amount: 0,
    icon: "healthicons:no",
  },
  {
    QTY: 0,

    tenderType: 100,
    Amount: 0,
    icon: "healthicons:no",
  },
  {
    QTY: 0,

    tenderType: 100,
    Amount: 0,
    icon: "healthicons:no",
  },
]);
const columns = [
  {
    title: " TENDER TYPE  ",
    dataIndex: "tenderType",
    key: " tynderType",
    width: "40%",
  },
  {
    title: " Amount",
    dataIndex: "Amount",
    key: " Amount",
    width: "40%",
  },
  {
    title: " QTY",
    dataIndex: "QTY",
    key: " QTY",
    width: "15%",
  },
  {
    title: () =>
      h(Icon, {
        icon: "tabler:rotate-dot",
        style: { fontSize: "20px", fontWeight: "200px" },
      }),
    dataIndex: "icon",
    customRender: ({ text }) => {
      return h(Icon, {
        icon: text,
        style: { fontWeight: "bold" }, // Adding font weight to custom render
      });
    },
  },
];

// Computed property to format total in KHR currency
const formattedTotal = computed(() => {
  return total.value.toLocaleString("en-KH", {
    style: "currency",
    currency: "USD",
  });
});

// Watch inputValue changes (only when the table is disabled)
watch(inputValue, (newValue) => {
  if (!props.isTableEnabled) {
    total.value = parseFloat(newValue) || 0;
  }
});

// Ensure total is updated when the table is enabled
watch(
  () => props.isTableEnabled,
  (newVal) => {
    if (newVal) {
      calculateTotals();
    }
  }
);

// Calculate the total based on the data array
const calculateTotals = () => {
  total.value = data.value.reduce((acc, item) => acc + item.Amount, 0);
};

// Increment function
const increment = (index: number) => {
  if (props.isTableEnabled) {
    data.value[index].QTY++;
    data.value[index].Amount =
      data.value[index].tenderType * data.value[index].QTY;
    calculateTotals();
  }
};

// Decrement function
const decrement = (index: number) => {
  if (props.isTableEnabled && data.value[index].QTY > 0) {
    data.value[index].QTY--;
    data.value[index].Amount =
      data.value[index].tenderType * data.value[index].QTY;
    calculateTotals();
  }
};

// Remove item from data
const removeItem = (index: number) => {
  if (props.isTableEnabled) {
    data.value.splice(index, 1);
    calculateTotals();
  }
};
</script>

<style scoped>
.placeholder-custom::placeholder {
  color: #005c94;
  opacity: 1;
  font-weight: bold;
  font-size: 20px;
}
.disabled-table {
  opacity: 0.5;
  pointer-events: none;
  background-color: #f5f5f5;
}
</style>
