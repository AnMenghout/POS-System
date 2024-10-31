<template>
  <a-row
    justify="center"
    align="middle"
    style="min-height: 100vh"
    class="bg-slate-100"
  >
    <a-col :span="6">
      <a-card class="pt-5">
        <a-row :gutter="[0, 10]">
          <a-row :gutter="[0, 10]" justify="center" align="middle">
            <img src="/assets/images/image/Roktenhlogo.png" alt="" />
            <a-typography class="text-[#4B465C]"
              >Please login to your account and start the
              adventure</a-typography
            >
          </a-row>
          <a-form
            :model="formState"
            name="basic"
            autocomplete="off"
            layout="vertical"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
            class="w-full"
          >
            <a-form-item
              name="Phone or Username"
              :rules="[
                {
                  required: true,
                  message: 'The Email or Username is invalid!',
                },
              ]"
            >
              <a-typography class="mb-1"> Phone or Username</a-typography>
              <a-input
                v-model:value="formState.phoneOrEmail"
                size="large"
                placeholder="john.doe"
              />
            </a-form-item>

            <a-form-item
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-flex align="center" justify="space-between" class="mb-1">
                <a-typography> password </a-typography>
                <nuxt-link class="text-[#005C94]" to="/">
                  Forgot password?
                </nuxt-link>
              </a-flex>
              <a-input
                v-model:value="formState.password"
                size="large"
                placeholder="password"
              />
            </a-form-item>
            <a-form-item name="remember">
              <a-checkbox v-model:checked="formState.remember"
                >Remember me</a-checkbox
              >
            </a-form-item>

            <a-row :gutter="[0, 10]" justify="center" align="middle">
              <a-button type="primary" html-type="submit" class="w-full"
                >Login</a-button
              >
              <a-flex class="gap-1">
                <a-typography>New on our platform? </a-typography>
                <nuxt-link class="text-[#005C94]" to="/"
                  >Create an account
                </nuxt-link>
              </a-flex>
            </a-row>
          </a-form>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

interface FormState {
  phoneOrEmail: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  phoneOrEmail: "",
  password: "",
  remember: true,
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
