<script setup>
const router = useRouter();
const route = useRoute();

/* template */

// import GeneralHeader from "./header.vue";
// import GeneralFooter from "./footer.vue";
</script>

<template>
  <v-layout>
    <div class="px-8 py-8">
      <div class="text-3xl font-bold">Tailwindcss UI Kit base on Unified Form <span class="text-lg font-light text-gray-500">(@yooneskh)</span></div>
    </div>
    <v-main>
      <NuxtPage />
    </v-main>
  </v-layout>
</template>
