<template>
  <a-extract-style>
    <NuxtLayout>
      <a-config-provider :theme="{
        token: {
          colorPrimary: '#005C94',
          // fontFamily: 'Noto Sans',
          colorInfo: '#005C94',
          colorLink: '#005C94',
          colorText: '#4B465C',
        },
        components: {
          Form: {
            colorTextHeading: '#4B465C',
          },
        },
      }">
        <NuxtPage />
      </a-config-provider>
    </NuxtLayout>
  </a-extract-style>
</template>