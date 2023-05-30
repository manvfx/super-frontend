<script setup>
/* interface */
const props = defineProps({
  value: {},
  field: {},
  success: Boolean,
  error: Boolean,
  messages: Array,
});

const emit = defineEmits(["input"]);
</script>

<template>
  <div class="mb-4">
    map
  </div>
</template>
