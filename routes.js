import { resolve } from 'path';

export const routes = [
    {
      name: 'auth.page',
      path: '/auth',
      file: resolve('./modules/auth/page.vue'),
    },
    {
      path: '/',
      file: resolve('./modules/general/wrapper.vue'),
      children: [
        {
          name: 'general.home',
          path: '',
          file: resolve('./modules/home/page.vue'),
        },
      ],
    },
    {
      path: '/panel',
      file: resolve('./modules/panel/wrapper.vue'),
      children: [
        {
          name: 'panel.home',
          path: '',
          file: resolve('./modules/panel/page.vue'),
        },       
      ],
    },
  ];