<script setup>
const router = useRouter();
const route = useRoute();

const authForm = reactive({
  fullName: "",
  phoneNumber: "",
  gender: "both",
  conforms: false,
  bio: "",
  history: [],
  marrid: "",
  sizes: "",
  cover: "",
});
</script>

<template>
  <div class="px-8 py-8">
    <div class="px-4 py-4 bg-slate-200 rounded-lg mb-4">
      <div class="font-bold text-lg">Form Elements</div>
    </div>
    <u-form
      class="mt-2"
      :target="authForm"
      :fields="[
        {
          key: 'fullName',
          identifier: 'text',
          label: 'Full Name',
          placeholder: 'Full Name',
          width: 6,
        },
        {
          key: 'phoneNumber',
          identifier: 'text',
          label: 'Phone Number',
          placeholder: 'Phone Number',
          width: 6,
        },
        {
          key: 'gender',
          identifier: 'select',
          label: 'Gender',
          items: [
            {
              value: 'male',
              title: 'Male',
              icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              value: 'female',
              title: 'Female',
              icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
              value: 'both',
              title: 'Both',
              icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
          ],
          width: 6,
        },
        {
          key: 'conforms',
          identifier: 'checkbox',
          label: 'Do You Conform?',
          hint: 'Get notified when someones posts a comment on a posting.',
          width: 12,
        },
        {
          key: 'history',
          identifier: 'checkboxes',
          label: 'Histories',
          width: 6,
          items: [
            {
              value: 'chemistery',
              title: 'Chemi',
              hint: 'Get notified when someones posts a comment on a posting.',
            },
            {
              value: 'physics',
              title: 'Physics',
              hint: 'Get notified when someones posts a comment on a posting.',
            },
          ],
        },
        {
          key: 'bio',
          identifier: 'textarea',
          label: 'Biography',
          width: 12,
          rows: 3,
        },
        {
          key: 'marrid',
          identifier: 'radiobuttons',
          label: 'Marries Type',
          width: 6,
          inline: true,
          items: [
            {
              value: 'chemistery',
              title: 'Chemi',
              hint: 'Get notified when someones posts a comment on a posting.',
            },
            {
              value: 'physics',
              title: 'Physics',
              hint: 'Get notified when someones posts a comment on a posting.',
            },
          ],
        },
        {
          key: 'cover',
          identifier: 'file',
          label: 'Cover Photo',
          width: 12,
        },
        // {
        //   key: 'sizes',
        //   identifier: 'series',
        //   label: 'Sizes',
        //   itemFields: [
        //     {
        //       key: 'name',
        //       identifier: 'text',
        //       label: 'Name',
        //       width: 6,
        //     },
        //     {
        //       key: 'lastName',
        //       identifier: 'text',
        //       label: 'Last Name',
        //       width: 6,
        //     },
        //   ],
        // },
      ]"
    />
    <div class="px-4 py-4 bg-slate-200 rounded-lg mb-4">
      <div class="font-bold text-lg">Dialogs</div>
    </div>
  </div>
</template>
