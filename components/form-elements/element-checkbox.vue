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
    <div class="relative flex gap-x-3">
      <div class="flex h-6 items-center">
        <input
          :id="props.field.key"
          type="checkbox"
          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          :checked="props.field.value"
          @input="$emit('input', $event.target.checked)"
        />
      </div>
      <div class="text-sm leading-6">
        <label :for="props.field.key" class="font-medium text-gray-900">{{
          props.field.label
        }}</label>
        <p class="text-gray-500">
          {{ props.field.hint }}
        </p>
      </div>
    </div>
  </div>
</template>
