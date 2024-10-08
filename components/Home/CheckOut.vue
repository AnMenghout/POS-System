<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const checked = ref<boolean>(false);
const data = ref({
  item: 12,
  discount: '5.00',
  vat: '10.00',
  sub_total: '88.00',
  total_in_dollar: '88.00',
  total_in_khmer: '300,000',
  rate: '4100',
});
const options = ref([
  {
    icon: "tabler:credit-card",
    type: 'Card',
    value: "a"
  },
  {
    icon: "fluent:money-16-regular",
    type: 'Cash',
    value: "b"
  },
  {
    icon: "tabler:object-scan",
    type: 'KHQR',
    value: "c"
  },
]);
const selectedBrand = ref<string>('');
const showWrapper = computed(() => {
  return selectedBrand.value === 'a' || selectedBrand.value === 'c';
});
</script>

<template>
  <a-flex align="center" justify="space-between" gap="20">
    <a-card class="mt-5 w-full h-full" :body-style="{ padding: '16px' }">
      <a-flex vertical gap="20">
        <a-flex align="center" justify="space-between">
          <a-typography-text style="color:#5c576b;" class="font-semibold text-lg">Payment</a-typography-text>
          <a-flex align="center" gap="10">
            <a-typography-text style="color: #b0adb8;" class="font-normal text-base">Print Receipt</a-typography-text>
            <a-switch v-model:checked="checked" />
          </a-flex>
        </a-flex>
        <a-card class="w-full" :body-style="{ padding: '16px' }">
          <a-flex vertical gap="15" class="my-7">
            <a-flex align="center" justify="space-between">
              <a-typography-text style="color:#92929D;" class="font-normal text-base">Items</a-typography-text>
              <a-typography-text style="color: #11142D;" class="font-normal text-base">{{ data.item
                }}</a-typography-text>
            </a-flex>
            <a-flex align="center" justify="space-between">
              <a-typography-text style="color:#92929D;" class="font-normal text-base">Discount</a-typography-text>
              <a-typography-text style="color: #11142D;" class="font-normal text-base">$ {{ data.discount
                }}</a-typography-text>
            </a-flex>
            <a-flex align="center" justify="space-between">
              <a-typography-text style="color:#92929D;" class="font-normal text-base">VAT</a-typography-text>
              <a-typography-text style="color: #11142D;" class="font-normal text-base">$ {{ data.vat
                }}</a-typography-text>
            </a-flex>
            <a-flex align="center" justify="space-between">
              <a-typography-text style="color:#92929D;" class="font-normal text-base">Sub Total</a-typography-text>
              <a-typography-text style="color: #11142D;" class="font-normal text-base">$ {{ data.sub_total
                }}</a-typography-text>
            </a-flex>
          </a-flex>
        </a-card>
        <a-typography-text style="color:#5c576b;" class="font-semibold text-lg">Total</a-typography-text>
        <a-card class="w-full" :body-style="{ padding: '16px' }">
          <a-flex vertical gap="15" class="my-10">
            <a-flex align="center" justify="space-between">
              <a-typography-text style="color:#92929D;" class="font-normal text-base">Total In
                Dollar</a-typography-text>
              <a-typography-text style="color: #11142D;" class="font-bold text-3xl">$ {{ data.total_in_dollar
                }}</a-typography-text>
            </a-flex>
            <a-flex align="center" justify="space-between">
              <a-typography-text style="color:#d4d4d9;" class="font-normal text-base">Total In Real</a-typography-text>
              <a-typography-text style="color:#898b96;" class="font-bold text-3xl">៛ {{ data.total_in_khmer
                }}</a-typography-text>
            </a-flex>
          </a-flex>
        </a-card>
      </a-flex>
    </a-card>
    <a-card class="mt-5 w-full" :body-style="{ padding: '16px' }">
      <a-flex vertical gap="15">
        <a-typography-text style="color:#5c576b;" class="font-semibold text-lg">Payment Option</a-typography-text>
        <div class="options">
          <label v-for="(option, index) in options" :key="index"
            :class="['option', { selected: selectedBrand === option.value }]">
            <input type="radio" v-model="selectedBrand" :value="option.value" class="radio-input" />
            <a-flex vertical>
              <span>
                <Icon :icon="option.icon" width="24" height="24" />
              </span>
              <span>{{ option.type }}</span>
            </a-flex>
          </label>
        </div>
        <a-divider class="mt-3 mb-0" />
        <a-typography-text style="color:#5c576b;" class="font-semibold text-lg">Split Change Payment</a-typography-text>
        <div class="">
          <a-flex vertical gap="30">
            <a-flex align="center" justify="space-between">
              <a-flex align="center" gap="20">
                <a-avatar shape="square" :size="40"
                  style="background-color: #005C94; display: flex; align-items: center">
                  <Icon icon="tabler:file-dollar" width="24" height="24" style="color:#FFFFFF;" />
                </a-avatar>
                <a-flex vertical>
                  <a-typography-text style="color:#5c576b;" class="font-semibold text-base">Dollar</a-typography-text>
                  <a-typography-text style="color:#b1afba; " class="font-semibold text-base">Currency $</a-typography-text>
                </a-flex>
              </a-flex>
              <a-input style="width: 70%;" placeholder="$ 0.00" class="text-end" size="large" />
              <!-- Conditional Wrapper Class -->
              <div :class="{'wrapper': showWrapper}"></div>
            </a-flex>
            <a-flex align="center" justify="space-between">
              <a-flex align="center" gap="20">
                <a-avatar shape="square" :size="40"
                  style="background-color: #005C94; display: flex; align-items: center">
                  <Icon icon="tabler:file-dollar" width="24" height="24" style="color:#FFFFFF;" />
                </a-avatar>
                <a-flex vertical>
                  <a-typography-text style="color:#5c576b;" class="font-semibold text-base">Real</a-typography-text>
                  <a-typography-text style="color:#b1afba; " class="font-semibold text-base">Currency $</a-typography-text>
                </a-flex>
              </a-flex>
              <a-input style="width: 70%;" placeholder="៛ 0.00" class="text-end" size="large" />
              <div :class="{'wrapper': showWrapper}"></div>
            </a-flex>
          </a-flex>
        </div>
        <a-divider class="mt-3 mb-0" />
        <a-flex align="center" justify="space-between">
          <a-typography-text style="color:#5c576b;" class="font-semibold text-lg">Change</a-typography-text>
          <a-flex align="center" gap="10">
            <a-typography-text style="color: #b0adb8;" class="font-normal text-base">Exchange Rate :
            </a-typography-text>
            <a-typography-text style="color: #b0adb8;" class="font-normal text-base">4100</a-typography-text>
          </a-flex>
        </a-flex>
        <a-card class="w-full" :body-style="{ padding: '16px' }">
          <a-flex vertical gap="15">
            <a-flex align="center" justify="space-between">
              <a-typography-text style="color:#92929D;" class="font-normal text-base">Dollar Currency
                $</a-typography-text>
              <a-typography-text style="color: #11142D;" class="font-normal text-3xl">$ 0.00</a-typography-text>
            </a-flex>
            <a-flex align="center" justify="space-between">
              <a-typography-text style="color:#92929D;" class="font-normal text-base">Riel Currency
                ៛</a-typography-text>
              <a-typography-text style="color: #92929D;" class="font-normal text-3xl">៛ 0.00</a-typography-text>
            </a-flex>
          </a-flex>
        </a-card>
      </a-flex>
    </a-card>
  </a-flex>
</template>

<style scoped>
.options {
  display: flex;
  gap: 15px;
}

.option {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px 20px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  height: 90px;
  width: 100%;
  font-size: 1em;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.selected {
  background-color: #0066a0;
  /* Blue background for selected */
  color: white;
  border-color: transparent;
}

.radio-input {
  display: none;
}

.wrapper {
  background-color: #ffffff80;
  width: 100%;
  height: 10%;
  position: absolute;
  top: 1;
  left: 0;
}
</style>
