<script lang="ts" setup>
import { reactive, ref, watch, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { useRoute } from "vue-router";

const route = useRoute();
const headerVisible = ref<boolean>(true);
const open = ref<boolean>(false);
const showDrawer = () => {
  open.value = true;
};
const onClose = () => {
  open.value = false;
};

interface State {
  rootSubmenuKeys: string[];
  openKeys: string[];
  selectedKeys: string[];
}

const state = reactive<State>({
  rootSubmenuKeys: ["dashboard", "shop_owner_management", "all_store"],
  openKeys: [""],
  selectedKeys: [],
});

const setSelectedKeys = (keys: string[]) => {
  state.selectedKeys = keys;
  localStorage.setItem("selectedKeys", JSON.stringify(keys));
};

onMounted(() => {
  const savedKeys = localStorage.getItem("selectedKeys");
  if (savedKeys) {
    state.selectedKeys = JSON.parse(savedKeys);
  } else {
    state.selectedKeys = [""];
  }
  // Set header visibility based on the current route
  if (route.path.includes("/Balance")) {
    headerVisible.value = false; // Hide header on /Balance
  } else {
    headerVisible.value = true; // Show header on other routes
  }
});

// Watch for changes to the route
watch(
  () => route.path,
  (newPath) => {
    if (newPath.includes("/home")) {
      setSelectedKeys(["dashboard"]);
      headerVisible.value = true; // Show header
    } else if (newPath.includes("/Balance")) {
      headerVisible.value = false; // Hide header when on /Balance
    } else {
      setSelectedKeys([""]);
      headerVisible.value = true; // Show header for other routes
    }
  }
);
const dynamicMarginTop = computed(() => {
  return route.path.includes("/Balance") ? "16px" : "45px";
});
</script>

<template>
  <div class="dashboard">
    <a-layout>
      <a-layout-sider
        theme="light"
        class="hide-on-sm h-full"
        :width="85"
        :style="{
          // overflow: 'auto',
          top: 0,
          bottom: 0,
          border: 'none',
        }"
      >
        <div class="logo">
          <NuxtLink to="/">
            <img
              src="/assets/images/logo/logo.svg"
              height="25"
              alt="Discover Nuxt 3"
            />
          </NuxtLink>
        </div>
        <div class="sidebar-content">
          <a-menu
            v-model:selected-keys="state.selectedKeys"
            :open-keys="state.openKeys"
            mode="inline"
          >
            <a-menu-item-group>
              <NuxtLink to="/home">
                <a-menu-item key="dashboard" class="p-0">
                  <Icon icon="tabler:smart-home" width="30" height="30" />
                </a-menu-item>
              </NuxtLink>
            </a-menu-item-group>
            <a-menu-item-group>
              <nuxt-link to="/Sellmanagement">
                <a-menu-item key="Shop_Owner">
                  <Icon icon="tabler:file-dollar" width="30" height="30" />
                </a-menu-item>
              </nuxt-link>
            </a-menu-item-group>
            <a-menu-item-group>
              <a-menu-item key="Delivery_Network">
                <Icon icon="tabler:clipboard-list" width="30" height="30" />
              </a-menu-item>
            </a-menu-item-group>
          </a-menu>
          <a-menu
            v-model:selected-keys="state.selectedKeys"
            mode="inline"
            class="menu-bottom"
          >
            <a-menu-item-group>
              <nuxt-link to="/Balance">
                <a-menu-item key="Customer_Management">
                  <Icon icon="tabler:wallet" width="30" height="30" />
                </a-menu-item>
              </nuxt-link>
            </a-menu-item-group>
          </a-menu>
        </div>
      </a-layout-sider>
      <a-layout style="min-height: 100vh">
        <a-layout-header
          v-if="headerVisible"
          :style="{ background: 'none', padding: '16px 24px 24px 24px' }"
        >
          <a-card :bodyStyle="{ padding: '13px' }">
            <div style="display: flex; align-items: center">
              <a-button type="text" @click="showDrawer" class="hide-on-md">
                <MenuOutlined />
              </a-button>
              <a-input
                placeholder="Search (Ctrl+/)"
                :bordered="false"
                size="large"
              >
                <template #prefix>
                  <SearchOutlined />
                </template>
              </a-input>
              <div style="display: flex; flex-direction: row">
                <a-space :size="10">
                  <a-badge :count="1">
                    <a-avatar
                      shape="circle"
                      :size="38"
                      style="
                        background-color: #fff;
                        display: flex;
                        align-items: center;
                      "
                    >
                      <Icon
                        icon="tabler:bell"
                        width="26"
                        height="26"
                        style="color: #6f6b7d"
                      />
                    </a-avatar>
                  </a-badge>
                  <a-badge dot>
                    <a-avatar
                      shape="circle"
                      :size="38"
                      style="
                        background-color: #ff4c5129;
                        display: flex;
                        align-items: center;
                      "
                    >
                      <Icon
                        icon="tabler:user"
                        width="26"
                        height="26"
                        style="color: #2f2b3de5"
                      />
                    </a-avatar>
                  </a-badge>
                </a-space>
              </div>
            </div>
          </a-card>
        </a-layout-header>
        <a-layout-content
          :style="{
            marginTop: dynamicMarginTop,
            marginRight: '20px',
            marginLeft: '20px',
          }"
        >
          <slot />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped>
.logo {
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hide-on-sm {
  display: block;
  height: 100vh;
}

.hide-on-md {
  display: block;
}

.sidebar-content {
  position: relative;
  height: 90vh;
}

.menu-bottom {
  position: absolute;
  bottom: 0;
}
</style>
