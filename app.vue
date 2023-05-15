<script setup>
/* authentication */

const token = inject("token");
const user = inject("user");

const loading = ref(false);

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<template>
  <v-app>
    <Head>
      <Title> Super Frontend </Title>
    </Head>

    <template v-if="loading">
      <div
        class="h-screen w-screen flex flex-col content-center justify-center items-center"
      >
        <img src="/logo.png" width="128" height="128" />

        Loading...
      </div>
    </template>
    <template v-else>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
  </v-app>
</template>

<style lang="scss">
</style>
