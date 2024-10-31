<script lang="ts" setup>
import { reactive, ref, watch, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';


const route = useRoute();


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
    rootSubmenuKeys: [
        'dashboard',
        'shop_owner_management',
        'all_store',
    ],
    openKeys: [''],
    selectedKeys: [],
});

const setSelectedKeys = (keys: string[]) => {
    state.selectedKeys = keys;
    localStorage.setItem('selectedKeys', JSON.stringify(keys));
};



onMounted(() => {
    const savedKeys = localStorage.getItem('selectedKeys');
    if (savedKeys) {
        state.selectedKeys = JSON.parse(savedKeys);
    } else {
        state.selectedKeys = [''];
    }


});

watch(
    () => route.path,
    (newPath) => {
        if (newPath.includes('/home')) {
            setSelectedKeys(['dashboard']);
        } else {
            setSelectedKeys(['']);
        }


    }
);

const loading = ref<boolean>(false);
const open2 = ref<boolean>(false);
const showModal2 = () => {
    open2.value = true;
};
const handleOk = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    open.value = false;
  }, 2000);
}
</script>



<template>
    <div class="dashboard">
        <a-layout>
            <a-layout-sider theme="light" class="hide-on-sm " :width="85" :style="{
                // overflow: 'auto',
                left: 0,
                height: 'full',
                top: 0,
                bottom: 0,
                border: 'none',
            }">
                <div class="logo">
                    <NuxtLink to="/">
                        <img src="/assets/images/logo/logo.svg" height="25" alt="Discover Nuxt 3" />
                    </NuxtLink>
                </div>
                <div class="sidebar-content">
                    <a-menu v-model:selected-keys="state.selectedKeys" :open-keys="state.openKeys" mode="inline">
                        <a-menu-item-group>
                            <NuxtLink to="/home">
                                <a-menu-item key="dashboard" class="p-0">
                                    <Icon icon="tabler:smart-home" width="30" height="30" />
                                </a-menu-item>
                            </NuxtLink>
                        </a-menu-item-group>
                        <a-menu-item-group>
                            <a-menu-item key="Shop_Owner">
                                <Icon icon="tabler:file-dollar" width="30" height="30" />
                            </a-menu-item>
                        </a-menu-item-group>
                        <a-menu-item-group>
                            <a-menu-item key="Delivery_Network" @click="showModal2">
                                <Icon icon="tabler:clipboard-list" width="30" height="30" />
                            </a-menu-item>
                        </a-menu-item-group>
                    </a-menu>
                    <a-modal v-model:open="open2" @ok="handleOk" width="37%" centered :footer="null" class="pay">
                        <HomePayLettlerBill />
                    </a-modal>
                    <a-menu v-model:selected-keys="state.selectedKeys" mode="inline" class="menu-bottom">
                        <a-menu-item-group>
                            <a-menu-item key="Customer_Management">
                                <Icon icon="tabler:wallet" width="30" height="30" />
                            </a-menu-item>
                        </a-menu-item-group>
                    </a-menu>
                </div>
            </a-layout-sider>
            <a-layout style="min-height: 100vh">
                <a-layout-header :style="{ background: 'none', padding: '16px 24px 24px 24px' }">
                    <a-card :bodyStyle="{ padding: '13px' }">
                        <div style="display: flex; align-items: center">
                            <a-button type="text" @click="showDrawer" class="hide-on-md">
                                <MenuOutlined />
                            </a-button>
                            <a-input placeholder="Search (Ctrl+/)" :bordered="false" size="large">
                                <template #prefix>
                                    <SearchOutlined />
                                </template>
                            </a-input>
                            <div style="display: flex; flex-direction: row">
                                <a-space :size="10">
                                    <a-badge :count="1">
                                        <a-avatar shape="circle" :size="38"
                                            style="background-color: #fff;display: flex; align-items: center">
                                            <Icon icon="tabler:bell" width="26" height="26" style="color: #6f6b7d ;" />
                                        </a-avatar>
                                    </a-badge>
                                    <a-badge dot>
                                        <a-avatar shape="circle" :size="38"
                                            style="background-color: #FF4C5129;display: flex; align-items: center">
                                            <Icon icon="tabler:user" width="26" height="26" style="color: #2F2B3DE5;" />
                                        </a-avatar>
                                    </a-badge>
                                </a-space>
                            </div>
                        </div>
                    </a-card>
                </a-layout-header>
                <a-layout-content :style="{ margin: '45px 20px 0' }">
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



.hide-on-md {
    display: block;
}

.menu-bottom {
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;

}

.pay{
    height: 500px;
	overflow-y: auto;
}
</style>
