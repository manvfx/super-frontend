<script setup>
const props = defineProps({
  icon: String,
  title: String,
  subtitle: String,
  text: String,
  startButtons: Array,
  endButtons: Array,
  isReversed: Boolean,
});

const emit = defineEmits(["resolve"]);

import { DialogPanel, DialogTitle, DialogDescription } from "@headlessui/vue";
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
/* button handling */

const loadingButtons = reactive({});

async function handleButtonClick(button) {
  if (!button.handler) {
    emit("resolve", button.value ?? button.title);
    return;
  }

  loadingButtons[button.value ?? button.title] = true;

  try {
    await button.handler();
    emit("resolve", button.value ?? button.title);
  } catch {}

  loadingButtons[button.value ?? button.title] = false;
}
</script>

<template>
  <DialogPanel
    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
  >
    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div
          class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
        >
          <ExclamationTriangleIcon
            class="h-6 w-6 text-red-600"
            aria-hidden="true"
            v-if="props.icon"
          />
        </div>
        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <DialogTitle
            as="h3"
            class="text-base font-semibold leading-6 text-gray-900"
            v-if="props.title"
            >{{ props.title }}</DialogTitle
          >
          <div class="mt-2" v-if="props.text">
            <p class="text-sm text-gray-500">
              {{ props.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- :class="{ 'flex-row-reversed': props.isReversed }" -->
    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        v-for="(button, index) of props.endButtons"
        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ml-3 sm:ml-3 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        :key="index"
        @click="handleButtonClick(button)"
        type="button"
      >
        {{ button.title }}
      </button>
      <button
        v-for="(button, index) of props.startButtons"
        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto"
        :key="index"
        @click="handleButtonClick(button)"
        type="button"
      >
        {{ button.title }}
      </button>
    </div>
  </DialogPanel>
</template>
