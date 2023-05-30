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
    <label
      :for="props.field.key"
      class="block text-gray-700 text-sm font-bold mb-2"
      >{{ props.field.label }}</label
    >
    <div class="mt-2">
      <select
        :id="props.field.key"
        class="shadow appearance-none px-3 leading-tight focus:outline-none focus:shadow-outline w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        @input="emit('input', $event.target.value)"
      >
        <option
          v-for="(item, index) of props.field.items"
          :value="item.value"
          :key="index"
          :selected="props.value"
        >
          {{ item.title }}
        </option>
      </select>
    </div>
  </div>
</template>
