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
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="props.field.key">
      {{ props.field.label }}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :id="props.field.key"
      :type="props.field.type"
      :placeholder="props.field.placeholder"
      :value="props.value"
      @input="emit('input', $event.target.value)"
    />
  </div>
</template>
