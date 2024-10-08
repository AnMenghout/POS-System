<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';


const data = ref([
    {
        quantity: 1,
        title: "Soba - Buckwheat",
        des: 'Noodles',
        price: 22
    },
    {
        quantity: 1,
        title: "Tempura - Prawns",
        des: 'Seafood',
        price: 10
    },
    {
        quantity: 1,
        title: "Sushi - Salmon",
        des: 'Fish',
        price: 22
    },

]);

const subTotal = ref<number>(0);
const vat = ref<number>(0);
const total = ref<number>(0);

const calculateTotals = () => {
    subTotal.value = data.value.reduce((acc, item) => acc + (item.price * item.quantity), 0);
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

const value = ref<string>('');
</script>

<template>
    <a-flex align="flex-start" justify="space-between" gap="20">
        <a-card class="mt-5 w-full h" :body-style="{ padding: '16px' }">
            <a-flex align="center" justify="space-between">
                <a-typography-text class="font-medium text-xl" style="color: #5c576b;">Order Bill</a-typography-text>
                <a-typography-text class="font-medium text-base" style="color: #999999;">Sunday. 22 July.
                    2023</a-typography-text>
            </a-flex>
            <div v-for="(record, index) in data" :key="index">
                <a-flex class="mt-5" align="center" justify="space-between">
                    <a-flex vertical>
                        <a-typography-text style="color: #11142D;" class="font-normal text-base">{{ record.title
                            }}</a-typography-text>
                        <a-typography-text style="color: #11142D;" class="font-normal text-base">{{ record.des
                            }}</a-typography-text>
                        <a-typography-text style="color: #42BDA1;" class="font-bold text-base">${{ record.price
                            }}</a-typography-text>
                    </a-flex>
                    <a-flex gap="15">
                        <a-flex gap="14" align="center">
                            <a-button @click="decrement(index)" class="w-fit px-1 border-none"
                                style="background-color: #005C94;">
                                <Icon icon="tabler:minus" width="24" height="24" style="color: white;" />
                            </a-button>
                            <a-typography-text>{{ record.quantity }}</a-typography-text>
                            <a-button @click="increment(index)" class="w-fit px-1 border-none"
                                style="background-color: #005C94;">
                                <Icon icon="tabler:plus" width="24" height="24" style="color: white;" />
                            </a-button>
                        </a-flex>
                        <a-button @click="removeItem(index)" class="w-fit px-1 border-none"
                            style="background-color: #666666;">
                            <Icon icon="tabler:trash" width="24" height="24" style="color: white" />
                        </a-button>
                    </a-flex>
                </a-flex>
                <a-divider class="m-0 mt-2" />
            </div>
        </a-card>
        <a-card class="mt-5 w-full" :body-style="{ padding: '16px' }">
            <a-flex align="center" justify="space-between">
                <a-typography-text class="font-medium text-xl" style="color: #5c576b;">Bill info</a-typography-text>
                <a-typography-text class="font-medium text-base" style="color: #999999;">Bill ID :
                    12092723542</a-typography-text>
            </a-flex>
            <a-typography-text class="font-normal text-sm" style="color: #999999;">Bill Note<span
                    style="color: red;">*</span></a-typography-text>
            <a-textarea v-model:value="value" placeholder="write bill noted here ..."
                :auto-size="{ minRows: 20, maxRows: 20 }" />
        </a-card>
    </a-flex>
</template>

<style scoped>
.h {
    min-height: 535px;
    height: 100%;
}
</style>