<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const data = ref([
  {
    quantity: 1,
    title: "Soba - Buckwheat",
    des: "Noodles",
    price: 22,
  },
  {
    quantity: 1,
    title: "Tempura - Prawns",
    des: "Seafood",
    price: 10,
  },
  {
    quantity: 1,
    title: "Sushi - Salmon",
    des: "Fish",
    price: 22,
  },
]);

const subTotal = ref<number>(0);
const vat = ref<number>(0);
const total = ref<number>(0);

const calculateTotals = () => {
  subTotal.value = data.value.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  vat.value = subTotal.value * 0.1;
  total.value = subTotal.value + vat.value;
};

const increment = (index: number) => {
  data.value[index].quantity++;
  calculateTotals();
};

const decrement = (index: number) => {
  if (data.value[index].quantity > 1) {
    data.value[index].quantity--;
    calculateTotals();
  }
};

const removeItem = (index: number) => {
  data.value.splice(index, 1);
  calculateTotals();
};
calculateTotals();

const open = ref<boolean>(false);
const open1 = ref<boolean>(false);
const open2 = ref<boolean>(false);
const loading = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};
const showModal1 = () => {
  open1.value = true;
};
const showModal2 = () => {
  open2.value = true;
};
const handleOk = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    open.value = false;
  }, 2000);
};
</script>

<template>
  <a-row :gutter="[10, 10]" class="Order_Bill">
    <a-col :span="24" class="h-full">
      <a-card class="bill overflow-auto">
        <a-flex vertical gap="10">
          <a-flex align="center" justify="space-between">
            <a-typography-text
              class="font-medium text-xl"
              style="color: #5c576b"
              >Order Bill</a-typography-text
            >
            <a-typography-text
              class="font-medium text-base"
              style="color: #999999"
              >Sunday. 22 July. 2023</a-typography-text
            >
          </a-flex>
          <a-flex justify="flex-end">
            <a-button
              class="w-fit px-1 border-none bg-gray-100"
              @click="showModal2"
            >
              <Icon icon="tabler:plus" width="24" height="24" />
            </a-button>
            <a-modal v-model:open="open2" @ok="handleOk" width="30%" centered>
              <template #footer>
                <a-flex align="center" justify="center">
                  <a-button
                    key="submit"
                    type="primary"
                    size="large"
                    class="shadow-none w-full"
                    html-type="submit"
                    @click="handleOk"
                  >
                    Add Item
                  </a-button>
                </a-flex>
              </template>
              <HomeAddItem />
            </a-modal>
          </a-flex>
        </a-flex>

        <!-- Order items -->
        <div v-for="(record, index) in data" :key="index">
          <a-flex class="mt-5" align="center" justify="space-between">
            <a-flex vertical>
              <a-typography-text
                style="color: #11142d"
                class="font-normal text-base"
                >{{ record.title }}</a-typography-text
              >
              <a-typography-text
                style="color: #11142d"
                class="font-normal text-base"
                >{{ record.des }}</a-typography-text
              >
              <a-typography-text
                style="color: #42bda1"
                class="font-bold text-base"
                >${{ record.price }}</a-typography-text
              >
            </a-flex>
            <a-flex gap="15">
              <a-flex gap="14" align="center">
                <a-button
                  @click="decrement(index)"
                  class="w-fit px-1 border-none"
                  style="background-color: #005c94"
                >
                  <Icon
                    icon="tabler:minus"
                    width="24"
                    height="24"
                    style="color: white"
                  />
                </a-button>
                <a-typography-text>{{ record.quantity }}</a-typography-text>
                <a-button
                  @click="increment(index)"
                  class="w-fit px-1 border-none"
                  style="background-color: #005c94"
                >
                  <Icon
                    icon="tabler:plus"
                    width="24"
                    height="24"
                    style="color: white"
                  />
                </a-button>
              </a-flex>
              <a-button
                @click="removeItem(index)"
                class="w-fit px-1 border-none"
                style="background-color: #666666"
              >
                <Icon
                  icon="tabler:trash"
                  width="24"
                  height="24"
                  style="color: white"
                />
              </a-button>
            </a-flex>
          </a-flex>
          <a-divider class="m-0 mt-2" />
        </div>
        <div class="mt-2">
          <a-typography-text class="font-medium text-xl" style="color: #005c94"
            >Others</a-typography-text
          >
        </div>
      </a-card>
    </a-col>

    <!-- Totals -->
    <a-col :span="24" class="Total">
      <a-card>
        <a-flex vertical gap="5">
          <a-flex align="center" justify="space-between">
            <a-typography-text
              class="font-medium text-base"
              style="color: #5c576b"
              >Sub Total</a-typography-text
            >
            <a-typography-text
              class="font-medium text-base"
              style="color: #5c576b"
              >${{ subTotal }}</a-typography-text
            >
          </a-flex>
          <a-flex align="center" justify="space-between">
            <a-typography-text
              class="font-medium text-base"
              style="color: #5c576b"
              >VAT</a-typography-text
            >
            <a-typography-text
              class="font-medium text-base"
              style="color: #5c576b"
              >${{ vat }}</a-typography-text
            >
          </a-flex>
          <a-divider class="m-0" />
          <a-flex align="center" justify="space-between">
            <a-typography-text class="font-bold text-2xl" style="color: #5c576b"
              >Total</a-typography-text
            >
            <a-typography-text class="font-bold text-2xl" style="color: #5c576b"
              >${{ total }}</a-typography-text
            >
          </a-flex>
        </a-flex>

        <!-- Buttons -->
        <a-flex gap="10" class="mt-4">
          <a-button
            class="w-full"
            size="large"
            style="background-color: #222222; color: white"
          >
            <a-flex gap="5" justify="center" align="center">
              Cash Drawer
              <Icon icon="tabler:cash" width="24" height="24" />
            </a-flex>
          </a-button>
          <a-button
            class="w-full border-cyan-800"
            size="large"
            style="color: #005c94"
            @click="showModal1"
            >Pay Later</a-button
          >
          <a-modal v-model:open="open1" @ok="handleOk" width="70%" centered>
            <template #footer>
              <a-flex align="center" justify="flex-end">
                <a-button
                  key="submit"
                  type="primary"
                  size="large"
                  class="shadow-none"
                  @click="handleOk"
                >
                  Confirm
                </a-button>
              </a-flex>
            </template>
            <HomePayLetter />
          </a-modal>
          <a-button
            class="w-full"
            style="background-color: #005c94; color: white"
            size="large"
            @click="showModal"
            >Check Out</a-button
          >
          <a-modal v-model:open="open" @ok="handleOk" width="70%" centered>
            <template #footer>
              <a-flex align="center" justify="flex-end">
                <a-button
                  key="submit"
                  type="primary"
                  size="large"
                  class="shadow-none w-32"
                  @click="handleOk"
                >
                  Pay
                </a-button>
              </a-flex>
            </template>
            <HomeCheckOut />
          </a-modal>
        </a-flex>
      </a-card>
    </a-col>
  </a-row>
</template>

<style scoped>
.Order_Bill {
  position: relative;
  height: 87vh;
}

.bill {
  height: 63vh;
  overflow-y: auto;
}

.Total {
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  width: 100%;
}
</style>
