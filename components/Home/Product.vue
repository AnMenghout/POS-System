<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import foodImage from '@/assets/images/image/food.svg';

const data = ref([
    {
        img: foodImage,
        title: "Smoke Salmon Rice Bowl",
        des: 'RK9400562',
        price: '27.09'
    },
    {
        img: foodImage,
        title: "Smoke Salmon Rice Bowl",
        des: 'RK9400562',
        price: '27.09'
    },
    {
        img: foodImage,
        title: "Smoke Salmon Rice Bowl",
        des: 'RK9400562',
        price: '27.09'
    },
    {
        img: foodImage,
        title: "Smoke Salmon Rice Bowl",
        des: 'RK9400562',
        price: '27.09'
    },
    {
        img: foodImage,
        title: "Smoke Salmon Rice Bowl",
        des: 'RK9400562',
        price: '27.09'
    },
    {
        img: foodImage,
        title: "Smoke Salmon Rice Bowl",
        des: 'RK9400562',
        price: '27.09'
    },
]);
const open = ref<boolean>(false);
const loading = ref<boolean>(false);

const showModal = () => {
    open.value = true;
};
const handleOk = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        open.value = false;
    }, 2000);
}

const quantity = ref<number>(1);


const itemPrice = ref<number>(22);
const subTotal = ref<number>(itemPrice.value * quantity.value);

const calculateTotal = () => {
    subTotal.value = itemPrice.value * quantity.value;
};


const increment = () => {
    quantity.value++;
    calculateTotal();
};


const decrement = () => {
    if (quantity.value > 1) {
        quantity.value--;
        calculateTotal();
    }
};

</script>

<template>
    <a-row :gutter="[20, 20]">
        <a-col :span="24">
            <a-typography-text style="color:#5c576b;" class="font-medium text-xl">Products</a-typography-text>
        </a-col>
        <a-col :span="8" v-for="(record, index) in data" :key="index">
            <a-card :body-style="{ padding: '0px', height: '282px' }" @click="showModal">
                <a-flex align="center" justify="center">
                    <img :src="record.img" alt="" class=" rounded-t-md " style="width: 100%; height: 190px;" />
                </a-flex>
                <a-flex vertical class="px-5 py-3" gap="9">
                    <a-flex vertical class="des">
                        <a-typography-text style="color:#2A2A2A ;" class="font-medium text-sm h">{{ record.title
                            }}</a-typography-text>
                        <a-typography-text style="color: #666666;" class="font-normal text-xs">{{ record.des
                            }}</a-typography-text>
                    </a-flex>
                    <a-typography-text style="color: #005C94;" class="font-semibold text-xl">${{ record.price
                        }}</a-typography-text>
                </a-flex>
            </a-card>
            <a-modal v-model:open="open" @ok="handleOk" width="60%" centered>
                <template #footer>
                    <a-flex align="center" justify="space-between">
                        <a-flex gap="25">
                            <a-flex gap="14" align="center">
                                <a-button @click="decrement" class="w-fit px-1 border-none"
                                    style="background-color: #005C94;">
                                    <Icon icon="tabler:minus" width="24" height="24" style="color: white;" />
                                </a-button>
                                <a-typography-text class="text-center">{{ quantity }}</a-typography-text>
                                <a-button @click="increment" class="w-fit px-1 border-none"
                                    style="background-color: #005C94;">
                                    <Icon icon="tabler:plus" width="24" height="24" style="color: white;" />
                                </a-button>
                            </a-flex>
                            <a-flex gap="10">
                                <a-typography-text style="color: #666666;" class="font-semibold text-xl">Total
                                    price:</a-typography-text>
                                <a-typography-text style="color: #005C94;" class="font-semibold text-xl">${{
                                    record.price }}</a-typography-text>
                            </a-flex>
                        </a-flex>
                        <a-button key="submit" type="primary" size="large" class="shadow-none" @click="handleOk">
                            <a-flex gap="5">
                                <Icon icon="tabler:shopping-cart-plus" width="20" height="20" />
                                Add to Cart
                            </a-flex>
                        </a-button>
                    </a-flex>
                </template>
                <HomeProductDetail />
            </a-modal>
        </a-col>
    </a-row>
</template>

<style scoped></style>