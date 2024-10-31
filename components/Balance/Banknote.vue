<template>
  <a-row class="justify-between">
    <a-flex class="gap-2">
      <a-typography class="text-xl"> Balance </a-typography>
      <a-typography class="m-auto"> Banknote Switch</a-typography>
      <a-switch v-model:checked="localChecked" size="small" class="m-auto" />
    </a-flex>

    <a-button
      @click="handleButtonClick"
      :type="buttonState.open ? 'danger' : ''"
      size="Large"
      :class="buttonState.open ? 'bg-red-500' : 'bg-green-500'"
      class="text-white"
    >
      {{ buttonState.open ? "Close" : "Open" }}
    </a-button>

    <a-modal v-model:open="open" @ok="handleOk" @cancel="handleCancel">
      <template #footer>
        <a-flex class="justify-start flex">
          <a-button
            key="back"
            @click="handleCancel"
            class="bg-slate-100 text-[#28C76F] rounded-md border-none"
          >
            Cancel
          </a-button>
          <a-button key="submit" type="primary" @click="handleOk">Ok</a-button>
        </a-flex>
      </template>
      <a-flex class="flex-col">
        <a-typography class="text-[#005C94]">{{ modalText }}</a-typography>
        <a-typography>please make sure your balance is matched</a-typography>
      </a-flex>
    </a-modal>
  </a-row>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  checked: Boolean,
});

const emit = defineEmits(["updateChecked"]);

const open = ref<boolean>(false);

const buttonState = reactive({
  open: false,
});

// Used to know if it's an open or close action
const isConfirmingClose = ref(false);

const localChecked = ref(props.checked);

// Computed property to dynamically set the modal text based on the button state
const modalText = computed(() => {
  return buttonState.open ? "Do you want to Open?" : "Do you want to close?";
});

// Handle the button click, open modal regardless of the state
const handleButtonClick = () => {
  open.value = true;
  isConfirmingClose.value = buttonState.open;
};

// Handle OK action in the modal
const handleOk = () => {
  open.value = false;

  // Toggle the button state based on whether it was confirming open or close
  buttonState.open = !isConfirmingClose.value;
};

// Handle Cancel action in the modal
const handleCancel = () => {
  open.value = false;
};

// Watch for any changes to localChecked and emit the change to the parent
watch(localChecked, (newValue) => {
  emit("updateChecked", newValue);
});
</script>
