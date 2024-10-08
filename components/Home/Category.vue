<script setup lang="ts">
import foodImage from '@/assets/images/image/food.svg';
const data = ref([
  {
    img: foodImage,
    title: "Salad"
  },
  {
    img: foodImage,
    title: "Salad"
  },
  {
    img: foodImage,
    title: "Salad"
  },
  {
    img: foodImage,
    title: "Salad"
  },
  {
    img: foodImage,
    title: "Salad"
  },
]);
</script>


<template>
    <a-row :gutter="[10,16]">
      <a-col :span="24">
        <a-typography-text style="color:#5c576b;" class="font-medium text-xl">Category</a-typography-text>
      </a-col>
  
  
      <a-col :span="4">
        <a-card :body-style="{padding: '0px', height:'100%'  }" class="h-full">
          <a-flex style="background-color: #005C94; height: 100%;" class="px-10 py-5 rounded-md " align="center" justify="center">
            <a-typography-text style="color: white;" class="text-center">All Category</a-typography-text>
          </a-flex>
        </a-card>
      </a-col>
      <a-col v-for="(record, index) in data" :key="index" :span="4" >
        <a-card :body-style="{ padding: '0' }" class="image-card">
          <div class="image-container">
            <img :src="record.img" alt="" class="image rounded-md" />
            <div class="image-title">
              <a-typography-text class="text-center" style="color: white;">{{ record.title }}</a-typography-text>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </template>
  

  <style scoped>
  .image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .image-title {
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    padding: 10px;
    border-radius: 8px;
  }
  </style>
  