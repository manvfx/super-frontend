<script setup>
const props = defineProps({
  icon: String,
  title: String,
  subtitle: String,
  text: String,
  initialForm: Object,
  fields: Array,
  submitLabel: String,
  cancelLabel: String,
  submitHandler: Function,
});

const emit = defineEmits(["resolve"]);

/* form */

const form = reactive(JSON.parse(JSON.stringify(props.initialForm ?? {})));

const isValid = ref(true);

/* submission */

const submitting = ref(false);

async function handleSubmit() {
  if (props.submitHandler) {
    try {
      submitting.value = true;
      await props.submitHandler({ ...form });
      submitting.value = false;
    } catch (error) {
      submitting.value = false;
      console.error(error);
      return;
    }
  }

  emit("resolve", { ...form });
}

import { DialogPanel, DialogTitle, DialogDescription } from "@headlessui/vue";
</script>

<template>
  <DialogPanel
    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
  >
    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mt-3 text-center mb-4 sm:mt-0 sm:text-left">
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

    <div class="px-8">
      <u-form
        :target="form"
        :fields="props.fields"
        v-model:is-valid="isValid"
      />
    </div>

    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        :disabled="!isValid"
        :loading="submitting"
        class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  ml-3 sm:ml-3  hover:bg-blue-700 sm:w-auto"
        @click="handleSubmit()"
        type="button"
      >
        {{ props.submitLabel || "Submit" }}
      </button>

      <v-spacer />

      <button
        @click="emit('resolve')"
        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        type="button"
      >
        {{ props.cancelLabel || "Cancel" }}
      </button>
    </div>
  </DialogPanel>
</template>
