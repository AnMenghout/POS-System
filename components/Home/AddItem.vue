<script lang="ts" setup>
import { reactive } from 'vue';

interface FormState {
    Name: string;
    Quantity: string;
    Vat : string;
 
}

const formState = reactive<FormState>({
    Name: '',
    Quantity: '',
    Vat: ''
  
});
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>

<template>
    <a-flex justify="center" class="bg-sky-700 mt-5 rounded-md mb-5">
        <a-typography-text class="text-white py-3 font-medium text-lg">Add Item</a-typography-text>
    </a-flex>
    <a-form :model="formState" name="basic" autocomplete="off" layout="vertical"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="Name" name="Name"
            :rules="[{ required: true, message: 'Please input your username!' }]">
            <a-input v-model:value="formState.Name" size="large" placeholder="Enter name" /> 
        </a-form-item>

        <a-form-item label="Quantity" name="Quantity"  
            :rules="[{ required: true, message: 'Please input your password!' }]">
            <a-input v-model:value="formState.Quantity" size="large" placeholder="0" />
        </a-form-item>  
        <a-form-item label="Unit price (incl. VAT)" name="Vat"  
            :rules="[{ required: true, message: 'Please input your password!' }]">
            <a-input v-model:value="formState.Vat" size="large" placeholder="0.00" />
        </a-form-item> 
    </a-form>
</template>

<style scoped></style>