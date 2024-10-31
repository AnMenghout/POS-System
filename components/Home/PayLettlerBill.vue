<script setup lang="ts">
import { ref } from 'vue';

const data = ref([
    {
        date: "Sunday. 22 July. 2023",
        time: '3:00pm',
        des: 'Customer will pay later because they don’t have enough money. and they wait their friends also.',
        id: '12092723542',
        price: '68.00'
    },
    {
        date: "Sunday. 22 July. 2023",
        time: '1:00pm',
        des: '',
        id: '12092723542',
        price: '68.00'
    },
    {
        date: "Sunday. 22 July. 2023",
        time: '4:00pm',
        des: 'Customer will pay later because they don’t have enough money. and they wait their friends also.',
        id: '12092723542',
        price: '68.00'
    },
    {
        date: "Sunday. 22 July. 2023",
        time: '',
        des: 'Customer will pay later because they don’t have enough money. and they wait their friends also.',
        id: '12092723542',
        price: '68.00'
    },
    

]);
</script>

<template>
    <a-flex justify="center" class="bg-sky-700 mt-5 rounded-md mb-5">
        <a-typography-text class="text-white py-3 font-medium text-lg">Pay later Bill</a-typography-text>
    </a-flex>
    <a-card class="my-5 w-full " :body-style="{ padding: '16px' }" v-for="(record, index) in data" :key="index">
        <a-flex vertical gap="10">
            <a-flex align="center" justify="space-between">
                <a-typography-text class="font-medium text-xl">Bill name</a-typography-text> 
                <a-flex align="center" gap="4">
                    <a-typography-text class="font-medium text-base" style="color: #666666;">{{ record.date
                        }}</a-typography-text>
                    <span class="i">|</span>
                    <a-typography-text class="font-medium text-base" style="color: #666666;">{{ record.time
                        }}</a-typography-text>
                </a-flex>
            </a-flex>
            <a-typography-text class="font-normal text-base" style="color: #999999;">{{ record.des
                }}</a-typography-text>
            <a-flex align="center" justify="space-between">
                <a-typography-text class="font-medium text-base" style="color: #666666;"> Bill ID :{{ record.id
                    }}</a-typography-text>
                <a-typography-text class="font-medium text-xl" style="color: #005C94;">${{ record.price
                    }}</a-typography-text>
            </a-flex>
        </a-flex>
    </a-card>
</template>

<style scoped></style>