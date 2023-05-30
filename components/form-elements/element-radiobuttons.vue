<script setup>
import { computed } from 'vue';
/* interface */
const props = defineProps({
  value: {},
  field: {},
  success: Boolean,
  error: Boolean,
  messages: Array,
});

const emit = defineEmits(["input"]);

const valueProxy = computed({
  get: () => props.value || [],
  set:  v => emit('input', v),
});

function toggleField(value, isChecked) {

  if (!isChecked) {
    if (!props.value || !Array.isArray(props.value)) {
      emit('input', [])
    }
    else {
      emit('input', props.value.filter(it => it !== value))
    }
  }
  else {
    if (!props.value || !Array.isArray(props.value)) {
      emit('input', [value])
    }
    else {
      emit('input', [...props.value.filter(it => it !== value), value])
    }
  }

}

</script>

<template>
  <div class="mb-4">
    <fieldset>
      <legend class="text-sm font-semibold leading-6 text-gray-900">
        {{ props.field.label }}
      </legend>
      <div class="mt-6 space-y-6">
        <div
          class="relative flex gap-x-3"
          v-for="(item, index) of props.field.items"
          :key="index"
        >
          <div class="flex h-6 items-center">
            <input
              :id="item.value"
              type="radio"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              :checked="props.value?.includes(item.value)"
              @input="toggleField(item.value, $event.target.checked)"
            />
          </div>
          <div class="text-sm leading-6">
            <label :for="item.value" class="font-medium text-gray-900">{{
              item.title
            }}</label>
            <p v-if="item.hint" class="text-gray-500">
              {{ item.hint }}
            </p>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>
