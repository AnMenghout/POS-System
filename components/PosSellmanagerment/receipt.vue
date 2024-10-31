<template>
  <a-flex class="flex-col gap-3 pb-3">
    <a-button type="primary" class="border-none shadow-none">
      Print Now
    </a-button>
    <a-alert
      class="px-[15px] py-[12px] flex text-center bg-[#FF9F4329] text-[#FF9F43]"
      description="Please make sure Turn On your Printer"
      type="warning"
    />
  </a-flex>

  <div
    :bodyStyle="{ padding: '0px' }"
    class="border-t border-l border-r border-[black]"
  >
    <a-flex class="flex-col items-center pt-2">
      <img
        src="/assets/images/image/receiptlogo.png"
        class="w-[100px] h-[15px]"
        alt="Company Logo"
      />
      <a-typography>Sn. No. 1003 Village Bayan Commune,</a-typography>
      <a-typography>Phnom Penh, Cambodia</a-typography>
    </a-flex>

    <a-divider style="border-color: black" dashed class="my-1" />
    <div v-for="data in receipt" :key="data.id">
      <a-row class="justify-between p-1">
        <a-col class="flex flex-col text-[10px]">
          <a-typograpy> {{ data.dateKH }} </a-typograpy>
          <a-typograpy> {{ data.dateEN }} </a-typograpy>
          <a-typograpy> POS{{ data.posID }} </a-typograpy>
        </a-col>
        <a-col class="flex flex-col text-[10px]">
          <a-typograpy>{{ data.receiptKH }}</a-typograpy>
          <a-typograpy>{{ data.receiptEN }}</a-typograpy>
          <a-typograpy class="gap-2">{{ currentDate }}</a-typograpy>
        </a-col>
      </a-row>
      <a-divider style="border-color: black" dashed class="my-1" />
      <a-row class="justify-between p-1">
        <a-col class="flex flex-col text-[10px]">
          <a-typograpy> {{ data.customerKH }} </a-typograpy>
          <a-typograpy> {{ data.customerEN }} </a-typograpy>
          <a-typograpy> {{ data.unknown }} </a-typograpy>
        </a-col>
        <a-col class="flex flex-col text-[10px]">
          <a-typograpy>{{ data.timeKH }}</a-typograpy>
          <a-typograpy>{{ data.timeEN }}</a-typograpy>
          <a-typograpy class="gap-2">
            {{ currentTime }}
          </a-typograpy>
        </a-col>
      </a-row>
    </div>
  </div>
  <div class="border-r border-l border-[black]">
    <div class="bg-[black] px-[4px] pt-[6px] pb-[2px]">
      <a-row class="text-[white]">
        <a-col class="text-[10px]" :span="16">
          <span>បរិយាយទំនិញ</span>
        </a-col>
        <a-col :span="8">
          <a-row :gutter="[10]">
            <a-col class="text-[10px]">
              <span>ល.រ</span>
            </a-col>
            <a-col class="text-[10px]">
              <span>ចំនួន</span>
            </a-col>
            <a-col class="text-[10px] text-end">
              <span>តម្លៃសរុប</span>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <a-row class="text-[white]">
        <a-col class="text-[10px]" :span="16">
          <span>Description</span>
        </a-col>
        <a-col :span="8">
          <a-row :gutter="[12]">
            <a-col class="text-[10px]">
              <span>Queue</span>
            </a-col>
            <a-col class="text-[10px]">
              <span>Qty</span>
            </a-col>
            <a-col class="text-[10px] text-end">
              <span>Total</span>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>

    <div v-for="item in items" :key="item.id">
      <a-row class="px-[5px]">
        <a-col class="text-[10px] py-1" :span="16">
          <span>{{ item.description }}</span>
          <br />
          <span>{{ item.type }}</span>
        </a-col>
        <a-col :span="8">
          <a-row :gutter="[28]" class="py-1">
            <a-col class="text-[10px]">
              <span>{{ item.queue }}</span>
            </a-col>
            <a-col class="text-[10px]">
              <span>{{ item.qty }}</span>
            </a-col>
            <a-col class="text-[10px]">
              <span>{{ formatCurrency(item.total) }}</span>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <a-divider class="my-3" style="border-color: black" dashed />

    <a-row
      class="flex justify-between px-1"
      v-for="item in descriptions"
      :key="item.id"
    >
      <a-col>
        <a-typography class="text-[10px]"> {{ item.totalqtyKH }}</a-typography>
        <a-typography class="text-[10px]">{{ item.suptotalKH }} </a-typography>
        <a-typography class="text-[10px]">{{ item.discountKH }} </a-typography>
        <a-typography class="text-[10px]">{{ item.vatKH }} </a-typography>
        <a-typography class="text-[10px]">
          {{ item.deliveryKH }}
        </a-typography>
      </a-col>
      <a-col>
        <a-typography class="text-[10px]"> {{ item.totalqtyEN }}</a-typography>
        <a-typography class="text-[10px]">{{ item.suptotalEN }} </a-typography>
        <a-typography class="text-[10px]">{{ item.discountEN }} </a-typography>
        <a-typography class="text-[10px]">{{ item.vatEN }} </a-typography>
        <a-typography class="text-[10px]">
          {{ item.deliveryEN }}
        </a-typography>
      </a-col>
      <a-col>
        <a-typography class="text-[10px]"> {{ item.totalnumber }}</a-typography>
        <a-typography class="text-[10px]"
          >{{ item.subtotalnumber }}
        </a-typography>
        <a-typography class="text-[10px]"
          >{{ item.discountnumber }}
        </a-typography>
        <a-typography class="text-[10px]">{{ item.vatFee }} </a-typography>
        <a-typography class="text-[10px]">
          {{ item.deliveryFee }}
        </a-typography>
      </a-col>
    </a-row>
  </div>
  <div class="border-r border-l border-b border-black">
    <a-flex class="bg-black py-2 px-1 flex justify-between">
      <a-typography class="text-white text-[10px]">សរុបចុងក្រោយ </a-typography>
      <a-typography class="text-white text-[10px]"> Grand Total </a-typography>
      <a-typography class="text-white text-[10px]"> 17.78</a-typography>
    </a-flex>
    <a-divider class="my-3" style="border-color: black" dashed />
    <a-flex class="flex-col text-center text-[10px]">
      <a-typograpy> ទំនិញទិញហើយមិនអាចប្តូរបានទេ! </a-typograpy>
      <a-typograpy> សូមអញ្ជើញមកម្តងទៀត!សូមអរគុណ! </a-typograpy>
      <a-typograpy> Goods bought and can not be exchanged! </a-typograpy>
      <a-typograpy> pleace come again thank you! </a-typograpy>
    </a-flex>
    <a-divider class="my-3" style="border-color: black" dashed />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const currentDate = ref("");
const currentTime = ref("");

const updateTimeAndDate = () => {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  currentDate.value = `${day} ${month} ${year}`;

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  currentTime.value = now.toLocaleTimeString("en-US", timeOptions);
};

let interval: number;

onMounted(() => {
  updateTimeAndDate();
  interval = window.setInterval(updateTimeAndDate, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});

interface ReceiptItem {
  receiptKH: String;
  receiptEN: String;
  posID: Number;
  dateKH: string;
  dateEN: String;
  date: Date;
  customerKH: string;
  customerEN: string;
  unknown: string;
  timeKH: string;
  timeEN: string;
  id: number;
}
const receipt: Ref<ReceiptItem[]> = ref([
  {
    id: 1,
    receiptKH: "វិក័យប័ត្រយ",
    receiptEN: "Invoice",
    posID: 42457855,
    dateKH: "កាលបរិច្ឆេទ",
    dateEN: "date",
    customerKH: "អតិថិជន",
    customerEN: "Customer",
    timeKH: "ពេលវេលា",
    timeEN: "Date",
    unknown: "Unknown",
    date: new Date(),
  },
]);

interface Item {
  id: number;
  description: string;
  type: string;
  queue: number;
  qty: number;
  total: number;
}
const items: Ref<Item[]> = ref([
  {
    id: 1,
    description: "Tom Yum Seafood 7 heat",
    type: "Size M,Onion,Egg",
    queue: 78,
    qty: 1,
    total: 2.56,
  },
  {
    id: 2,
    description: "Tom Yum Beef ",
    type: "Size M,Onion,Egg",
    queue: 79,
    qty: 5,
    total: 12.56,
  },
  {
    id: 3,
    description: "Tom Yum Beef",
    type: "Size M,Onion,Egg",
    queue: 80,
    qty: 5,
    total: 12.56,
  },
]);

interface Description {
  id: number;
  totalqtyKH: string;
  totalqtyEN: string;
  totalnumber: number;
  suptotalKH: string;
  suptotalEN: string;
  subtotalnumber: number;
  discountKH: string;
  discountEN: string;
  discountnumber: number;
  vatKH: string;
  vatEN: string;
  vatFee: number;
  deliveryKH: string;
  deliveryEN: string;
  deliveryFee: number;
}
const descriptions: Ref<Description[]> = ref([
  {
    id: 1,
    totalqtyKH: "បរិមាណទំនិញ",
    suptotalKH: "សរុប ($)",
    discountKH: "  បញ្ចុះតម្លៃ (0%)",
    vatKH: " ពន្ធអាករ​ (0%) ",
    deliveryKH: "  តម្លៃដឹកជញ្ជូន (0%)",

    totalqtyEN: "Total Qty",
    suptotalEN: "Sub Total ($)",
    discountEN: "  Discount (0%)",
    vatEN: " Incl.VAT (10%) ",
    deliveryEN: "  Delivery Fee (0%)",

    totalnumber: 11,
    subtotalnumber: 17.78,
    discountnumber: 0.0,
    vatFee: 0.0,
    deliveryFee: 0.0,
  },
]);

const formatCurrency = (value) => `៛${value.toLocaleString()}`;
function printA5() {
  window.print();
}
</script>
<style scoped></style>
