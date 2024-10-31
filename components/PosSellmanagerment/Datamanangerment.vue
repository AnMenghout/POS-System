<template>
  <a-card :body-style="{ padding: '0' }" class="mt-2">
    <a-table :columns="columns" :pagination="false" :data-source="data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'id'">
          <a-space>
            <div>
              <a-typography-text
                class="text-base font-medium"
                style="color: #005c94"
                >{{ record.id }}</a-typography-text
              >
            </div>
          </a-space>
        </template>

        <template v-if="column.dataIndex === 'customers'">
          <a-space>
            <div>
              <a-typography-text
                class="text-base font-medium"
                style="color: #4b465c"
                >{{ record.customers }}</a-typography-text
              >
              <a-flex :gap="10">
                <a-typography-text
                  class="font-normal text-sm"
                  style="color: #222222"
                  >Items : {{ record.items }}</a-typography-text
                >
                <a-tag :color="getorderColor(record.status)" :bordered="false">
                  {{ record.status }}
                </a-tag>
              </a-flex>
            </div>
          </a-space>
        </template>
        <template v-if="column.dataIndex === 'date'">
          <a-space>
            <a-flex>
              <a-typography-text
                class="font-normal text-base"
                style="color: #2f2b3db2"
                >{{ record.date }}</a-typography-text
              >
              <a-typography-text
                class="font-normal text-base"
                style="color: #2f2b3db2"
                >{{ record.time }}</a-typography-text
              >
            </a-flex>
          </a-space>
        </template>

        <template v-if="column.dataIndex === 'payment'">
          <a-space>
            <a-flex align="center" v-if="record.payment === 'Case'" gap="5">
              <a-tag
                :color="getPaymentColor(record.payment)"
                class="font-semibold text-sm"
              >
                {{ record.payment }}
              </a-tag>
            </a-flex>
            <a-flex align="center" v-if="record.payment === 'Visa'" gap="5">
              <a-tag
                class="font-semibold text-sm"
                :color="getPaymentColor(record.payment)"
              >
                {{ record.payment }}
              </a-tag>
            </a-flex>
            <a-flex align="center" v-if="record.payment === 'KHQR'">
              <a-tag :color="getPaymentColor(record.payment)">
                {{ record.payment }}
              </a-tag>
            </a-flex>
          </a-space>
        </template>
        <template v-if="column.dataIndex === 'total'">
          <a-space>
            <a-typography-text
              class="font-normal text-base"
              style="color: #2f2b3db2"
              >{{ record.total }}</a-typography-text
            >
          </a-space>
        </template>
        <template v-if="column.dataIndex === 'seller'">
          <a-space>
            <a-tyography class="  ">
              {{ record.seller }}
            </a-tyography>
          </a-space>
        </template>
        <template v-if="column.dataIndex === 'actions'">
          <a-space class="-mt-2">
            <NuxtLink to="/Sellmanagement/invoice">
              <Icon icon="tabler:eye" width="24" height="24" />
            </NuxtLink>
            <Icon icon="tabler:printer" width="24" height="24" />
          </a-space>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
// import { useRoute } from "vue-router";
// const route = useRoute();
const columns = [
  {
    sorter: (a: DataItem, b: DataItem) => a.id - b.id,
    title: "ID",
    dataIndex: "id",
  },
  {
    sorter: (a: DataItem, b: DataItem) =>
      a.customers.localeCompare(b.customers),
    title: "CUSTOMERS",
    dataIndex: "customers",
  },
  {
    sorter: (a: DataItem, b: DataItem) => a.date.localeCompare(b.date),
    title: "DATE",
    dataIndex: "date",
  },

  {
    sorter: (a: DataItem, b: DataItem) => a.payment.localeCompare(b.payment),
    title: "PAYMENT",
    dataIndex: "payment",
  },
  {
    sorter: (a: DataItem, b: DataItem) => a.total.localeCompare(b.total),
    title: "TOTAL",
    dataIndex: "total",
  },
  {
    sorter: (a: DataItem, b: DataItem) => a.seller.localeCompare(b.seller),
    title: "SELLER",
    dataIndex: "seller",
  },
  {
    title: "ACTIONS",
    dataIndex: "actions",
  },
];

type Key = string | number;
enum Status {
  COD = "Complete",
  Online = "Online ",
}

enum Payment {
  Case = "Case",
  Visa = "Visa",
  KHQR = "KHQR",
}

interface DataItem {
  key: Key;
  id: number;
  date: string;
  customers: string;
  total: string;
  status: Status;

  time: string;

  items: number;
  payment: Payment;
  seller: string;
}

const data: Ref<DataItem[]> = ref([
  {
    key: 1,
    id: 222,
    customers: "Janey ferlopes",
    items: 22,
    status: Status.COD,
    date: "09 May 2022",
    time: "/05:30:50 Am",
    payment: Payment.Case,
    total: "$3077",
    seller: "Narith",
  },
  {
    key: 2,
    id: 222,
    customers: "Janey ferlopes",
    items: 22,
    status: Status.COD,

    date: "09 May 2022",
    time: "/05:30:50 Am",

    payment: Payment.Visa,
    total: "$3077",
    seller: "Narith",
  },
  {
    key: 3,
    id: 222,

    customers: "Janey ferlopes",
    items: 22,
    status: Status.COD,
    date: "09 May 2022",
    time: "/05:30:50 Am",

    payment: Payment.KHQR,
    total: "$3077",
    seller: "Narith",
  },
  {
    key: 4,
    id: 222,
    customers: "Janey ferlopes",
    items: 22,
    status: Status.COD,
    date: "09 May 2022",
    time: "/05:30:50 Am",

    payment: Payment.Case,
    total: "$3077",
    seller: "Narith",
  },
  {
    key: 5,
    id: 222,
    customers: "Janey ferlopes",
    items: 22,
    status: Status.COD,
    date: "09 May 2022",
    time: "/05:30:50 Am",
    payment: Payment.Case,

    total: "$3077",
    seller: "Narith",
  },
]);

function getorderColor(status: Status) {
  switch (status) {
    case Status.COD:
      return "#FF9F43";
    default:
      return "#52C41A";
  }
}

function getPaymentColor(status: Payment) {
  switch (status) {
    case Payment.Case:
      return "#FF9F43";
    case Payment.Visa:
      return "#52C41A";
    case Payment.KHQR:
      return "#FF5B5B";
    default:
      return "#005C94";
  }
}
</script>

<style scoped></style>
