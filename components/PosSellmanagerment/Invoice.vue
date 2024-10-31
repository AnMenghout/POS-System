<template>
  <a-flex class="gap-2 items-center">
    <Icon
      icon="tabler:building-store"
      width="20px"
      height="20px"
      style="color: #4b465c"
    />
    <a-typography class="text-[15px] text-[#4B465C] font-medium">
      Post sell Management
    </a-typography>
    <Icon
      icon="material-symbols:chevron-right"
      width="20px"
      height="20px"
      style="color: #4b465c"
    />
    <a-typography class="text-[15px] text-[#4B465C] font-medium">
      Receipt</a-typography
    >
  </a-flex>
  <a-flex class="justify-between pt-2 pb-4">
    <a-typography class="font-semibold text-[22px] text-[#4B465C]">
      Order ID : #1536548131
    </a-typography>
    <a-flex>
      <a-typography class="text-lg m-auto text-[#4B465C]">
        {{ currentDate }}
      </a-typography>
    </a-flex>
  </a-flex>
  <a-row :gutter="[18]">
    <a-col :span="18">
      <a-card :bodyStyle="{ padding: '50px 100px 50px 100px' }">
        <a-col>
          <a-row class="flex justify-between pb-4">
            <a-col>
              <a-typograpy class="font-[700] text-[24px] text-[#4B465C]">
                INVOICE</a-typograpy
              >
            </a-col>
            <a-col>
              <img src="/assets/images/image/Roktenhlogo.png" alt="" />
            </a-col>
          </a-row>
          <a-row class="px-0">
            <a-col :span="12" class="flex flex-col">
              <a-typograpy class="text-[15px] font-[600] text-[#4B465C]">
                Receipt:#{{ data[0].id }}
              </a-typograpy>
              <a-typograpy>
                Date Issues:
                <span class="date-style">{{
                  formatDate(data[0].dateIssues)
                }}</span>
              </a-typograpy>
              <a-typograpy>
                Date Due:
                <span class="date-style">{{
                  formatDate(data[0].dateDue)
                }}</span>
              </a-typograpy>
            </a-col>
            <a-col :span="12">
              <a-typograpy class="flex justify-end">
                {{ data[0].address }}
              </a-typograpy>
              <a-row class="justify-end">
                <a-typograpy> +1(123) {{ data[0].tellI }} </a-typograpy>
                <a-typograpy> +44 ( 876) {{ data[0].tellII }} </a-typograpy>
              </a-row>
            </a-col>
          </a-row>
          <a-row class="py-4">
            <a-typograpy class="text-[15px] text-[#4B465C] font-[600]">
              Description
            </a-typograpy>
          </a-row>
        </a-col>
        <a-row>
          <a-col :span="18"> DESCRIPION </a-col>

          <a-col :span="2">UNIT PRICE</a-col>
          <a-col :span="2"> QTY </a-col>
          <a-col :span="2"> AMOUNT </a-col>
        </a-row>
        <a-divider style="border-top-width: 3px" />
        <a-row v-for="item in invoice" :key="item.id">
          <a-col :span="18"> {{ item.description }} </a-col>
          <a-col :span="2"> ${{ item.unitprice.toFixed(2) }}</a-col>
          <a-col :span="2"> {{ item.qty }} </a-col>
          <a-col :span="2"> ${{ item.amount.toFixed(2) }} </a-col>
          <a-divider style="border-top-width: 2px" class="m-2" dashed />
        </a-row>
        <a-row
          class="justify-end w-[95%]"
          v-for="item in invoicetotal"
          :key="item.id"
        >
          <a-col :span="8" class="flex flex-col gap-1">
            <a-typograpy>
              {{ item.totalqty }}
            </a-typograpy>
            <a-typograpy>
              {{ item.subtotal }}
            </a-typograpy>
            <a-typograpy>
              {{ item.discount }}
            </a-typograpy>
            <a-typograpy>
              {{ item.vat }}
            </a-typograpy>
            <a-typograpy> Delivery fee </a-typograpy>
            <a-typograpy> {{ item.totalinclvat }} </a-typograpy>
          </a-col>

          <a-col class="flex flex-col gap-1 text-end">
            <a-typograpy>
              {{ item.totalnumber }}
            </a-typograpy>
            <a-typograpy> ${{ item.subtotalnumber.toFixed(2) }} </a-typograpy>
            <a-typograpy> ${{ item.discountnumber.toFixed(2) }} </a-typograpy>
            <a-typograpy> ${{ item.vatnumber.toFixed(2) }} </a-typograpy>
            <a-flex class="gap-1">
              <span
                v-if="item.deliveryStatus === DeliveryStatus.Free"
                class="strikethrough"
              >
                {{ item.deliveryfee }}
              </span>
              <a-badge
                class="bg-slate-300 rounded-sm px-[4px]"
                v-if="item.deliveryStatus === DeliveryStatus.Free"
              >
                <a-typography>
                  {{ DeliveryStatus.Free }}
                </a-typography>
              </a-badge>
              <span v-else>
                {{ item.deliveryfee }}
              </span>
            </a-flex>
            <a-typography>
              ${{ item.totalinclvatnumber.toFixed(2) }}
            </a-typography>
          </a-col>
        </a-row>
        <a-row class="mt-3">
          <a-typograpy class="font-[600]"> Note: </a-typograpy>
          <a-typograpy>
            Goods bought and can not be exchanged! Please come again! Thank you!
          </a-typograpy>
        </a-row>
      </a-card>
    </a-col>

    <a-col :span="6">
      <a-card class="p-[24px]">
        <a-flex class="flex-col gap-2">
          <a-button type="primary" @click="showDrawer" class="shadow-none">
            Preview & Print
          </a-button>
          <a-button
            type="primary"
            @click="modal2Visible = true"
            class="shadow-none"
          >
            Downlaod PDF
          </a-button>
        </a-flex>
      </a-card></a-col
    >
  </a-row>

  <a-modal v-model:open="modal2Visible" centered @ok="modal2Visible = false">
    <template #footer>
      <a-flex class="justify-start">
        <a-button
          key="back"
          @click="handleCancel"
          class="bg-slate-100 text-[#28C76F] rounded-md border-none shadow-none"
          >Cancel</a-button
        >
        <a-button
          key="submit"
          type="primary"
          @click="handleOk"
          class="shadow-none"
          >Download</a-button
        >
      </a-flex>
    </template>
    <a-flex class="flex-col">
      <a-typograpy class="text-[#005C94]">
        Do you want to Download
      </a-typograpy>
      <a-typograpy class="text-[#B9B9C3]">Receipt ID #5089</a-typograpy>
    </a-flex>
  </a-modal>
  <a-drawer :placement="right" @close="onClose" :closable="false" :open="open">
    <a-flex justify="space-between" align="middle">
      <a-flex>
        <a-typography class="text-[18px] text-[#4B465C] font-[600]"
          >Receipt Preview</a-typography
        >
      </a-flex>
      <a-flex>
        <a-button
          class="flex items-center bg-[#DBDADE] p-[7px]"
          @click="onClose"
        >
          <Icon
            icon="ic:round-close"
            width="1rem"
            height="1rem"
            style="color: #4b465c"
          />
        </a-button>
      </a-flex>
    </a-flex>

    <a-divider />
    <Receipt />
  </a-drawer>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Receipt from "./receipt.vue";

const currentDate = ref("");

const updateDate = () => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  currentDate.value = now.toLocaleDateString("en-US", options);
};

let interval: number;

onMounted(() => {
  updateDate();
  interval = window.setInterval(updateDate, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const calculateDateDue = (dateIssues: Date, daysToAdd: number): Date => {
  const dateDue = new Date(dateIssues);
  dateDue.setDate(dateDue.getDate() + daysToAdd);
  return dateDue;
};

interface DataItem {
  id: number;
  dateIssues: Date;
  dateDue: Date;
  address: string;
  tellI: number;
  tellII: number;
}

const data: Ref<DataItem[]> = ref([
  {
    id: 5089,
    dateIssues: new Date(),
    dateDue: calculateDateDue(new Date(), 4),
    address: "St No. 1003 Village Bayan Commune, Phnom Penh, Cambodia",

    tellI: 4567891,
    tellII: 5432198,
  },
]);

interface Invoice {
  description: string;
  unitprice: number;
  qty: number;
  amount: number;
  id: number;
}

const invoice: Ref<Invoice[]> = ref([
  {
    id: 1,
    description: " Pencil case with 12 unit  RedCello 2023 new box    ",
    unitprice: 2.0,
    qty: 12,
    amount: 2.0,
  },
  {
    id: 2,
    description: "Book Noted   ",
    unitprice: 1.0,
    qty: 1,
    amount: 2.0,
  },
  {
    id: 3,
    description: " Eraser     ",
    unitprice: 2.0,
    qty: 2,
    amount: 2.0,
  },
  {
    id: 4,
    description: " Khmer book    ",
    unitprice: 2,
    qty: 5,
    amount: 2.0,
  },
]);
const formattedInvoice = computed(() =>
  invoice.value.map((item) => ({
    ...item,
    unitprice: item.unitprice.toFixed(2),
    amount: item.amount.toFixed(2),
  }))
);
enum DeliveryStatus {
  Free = "Free",
  Charged = "Charged",
}
interface invoiceTotal {
  id: number;
  totalqty: string;
  totalnumber: number;
  subtotal: string;
  subtotalnumber: number;
  discount: string;
  discountnumber: number;
  vat: string;
  vatnumber: number;
  deliveryfee: string;
  deliveryStatus: DeliveryStatus;
  totalinclvat: string;
  totalinclvatnumber: number;
}
const invoicetotal: Ref<invoiceTotal[]> = ref([
  {
    id: 1,
    totalqty: " Total Qty ",
    totalnumber: 5,
    subtotal: "Subtotal",
    subtotalnumber: 1198,

    discount: " Discount ",
    discountnumber: 120,
    vat: "Vat",
    vatnumber: 1198,
    deliveryfee: "$5.00",
    deliveryStatus: DeliveryStatus.Free,
    totalinclvat: "  Total (incl. VAT)",
    totalinclvatnumber: 1198,
  },
]);
const modal2Visible = ref<boolean>(false);
const handleOk = () => {
  modal2Visible.value = false;
};

const handleCancel = () => {
  modal2Visible.value = false;
};

const open = ref<boolean>(false);

const showDrawer = () => {
  open.value = true;
};

const onClose = () => {
  open.value = false;
};
</script>
<style scoped>
.custom-table tbody tr td {
  border-bottom: 10px dashed #d9d9d9;
}

.custom-table thead tr th {
  border-bottom: 20px solid #d9d9d9;
}
.date-style {
  color: #4b465c;
  font-weight: 600;
  font-size: 15px;
}
.strikethrough {
  text-decoration: line-through;
  color: gray; /* Optional: to dim the crossed-out amount */
}
</style>
