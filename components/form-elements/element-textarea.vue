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
    <div class="col-span-full">
      <label
        :for="props.field.key"
        class="block text-sm font-medium leading-6 text-gray-900"
        >{{ props.field.label }}</label
      >
      <div class="mt-2">
        <textarea
          :id="props.field.key"
          :rows="props.field.rows"
          class="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          :value="props.value"
          :placeholder="props.field.placeholder"
          @input="emit('input', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>
