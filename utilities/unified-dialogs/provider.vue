<script setup>
import { ref } from "vue";

/* dialogs */

import { useDialogs } from "./state";
const dialogs = useDialogs();
import { TransitionRoot, TransitionChild, Dialog } from "@headlessui/vue";

/* remove */

function removeDialog(dialog) {
  dialog.modelValue = false;

  setTimeout(() => {
    dialogs.value.splice(
      dialogs.value.findIndex((it) => it.key === dialog.key),
      1
    );
  }, 1000);
}
</script>

<template>
  <TransitionRoot appear :show="dialogs.length > 0" as="template">
    <Dialog
      v-for="dialog of dialogs"
      :key="dialog.key"
      width="auto"
      as="div"
      class="relative z-10 px-4 py-4 border-1 w-100"
      v-bind="dialog.options"
      :model-value="dialog.modelValue"
      @update:model-value="
        !$event &&
          !dialog.options.prominent &&
          (dialog.resolve(undefined) || removeDialog(dialog))
      "
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <component
              :is="dialog.component"
              v-bind="dialog.props"
              @resolve="
                dialog.resolve($event);
                removeDialog(dialog);
              "
              @reject="
                dialog.reject($event);
                removeDialog(dialog);
              "
            />
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
