<script setup>
const router = useRouter();
const route = useRoute();

const authForm = reactive({
  phoneNumber: '0917',
  captchaCode: '123456',
});

</script>

<template>
  <div>
    <h1 class="text-lg">Hi Home Page</h1>
    <u-form
      class="mt-2"
      :target="authForm"
      :fields="[
        {
          key: 'phoneNumber',
          identifier: 'text',
          label: 'تلفن همراه',
          placeholder: 'تلفن همراه',
        },
        {
          key: 'captchaCode',
          identifier: 'text',
          label: 'کد امنیتی تصویر',
          placeholder: 'کد امنیتی تصویر',
        },
      ]"
    />
    {{ authForm }}
  </div>
</template>
