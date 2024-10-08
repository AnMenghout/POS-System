<script setup lang="ts">
import { ref } from 'vue';


const brands = ['Apple', 'Samsung', 'JBL'];
const sizes = ['S', 'M', 'L'];
const colors = ['#FF0000', '#000000', '#008000', '#FFFF00'];
const selectedColor = ref<string>('');
const selectedBrand = ref<string>('');
const selectedSize = ref<string>('');
</script>

<template>
  <a-card class="mt-5" :body-style="{ padding: '16px' }">
    <a-flex align="flex-start">
      <img src="/assets/images/image/Rectangle.png" alt="">
      <a-flex vertical class="w-80" gap="8">
        <a-typography-text style="color: #2A2A2A;" class="font-medium text-xl">Product name</a-typography-text>
        <a-typography-text style="color: #999999;" class="font-normal text-sm">Category type</a-typography-text>
        <a-typography-text style="color: #999999;" class="font-normal text-sm">Description Description Description
          Description Description Description </a-typography-text>
      </a-flex>
    </a-flex>
    <a-divider />
    <a-flex vertical gap="20">
      <a-typography-text style="color: #6f6b7d;" class="font-medium text-base">Brand</a-typography-text>
      <div class="options">
        <label v-for="(brand, index) in brands" :key="index" :class="['option', { selected: selectedBrand === brand }]">
          <input type="radio" v-model="selectedBrand" :value="brand" class="radio-input" />
          <span>{{ brand }}</span>
        </label>
      </div>
      <a-typography-text style="color: #6f6b7d;" class="font-medium text-base">Size</a-typography-text>
      <div class="options">
        <label v-for="(size, index) in sizes" :key="index" :class="['option2', { selected: selectedSize === size }]">
          <input type="radio" v-model="selectedSize" :value="size" class="radio-input" />
          <span>{{ size }}</span>
        </label>
      </div>
      <a-typography-text style="color: #6f6b7d;" class="font-medium text-base">Color</a-typography-text>
      <div class="color-radio-buttons">
        <label v-for="(color, index) in colors" :key="index"
          :class="['color-box', { selected: selectedColor === color }]">
          <input type="radio" v-model="selectedColor" :value="color" class="radio-input" />
          <span :style="{ backgroundColor: color }" class="color-display"></span>
        </label>
      </div>
    </a-flex>
  </a-card>
</template>

<style scoped>
.color-radio-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
}

.color-box {
  position: relative;
  display: flex;
  align-items: center;
}

.radio-input {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
}

.color-display {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: inline-block;
  border: 2px solid transparent;
}

.selected .color-display {
  border-color: blue;
  /* Highlight selected with blue border */
}

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
  height: 60px;
  font-size: 1em;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.option2 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px 20px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  height: 60px;
  width: 60px;
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
</style>