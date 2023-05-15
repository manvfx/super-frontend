import { http, generalHttpHandle } from '~/services/http/mod';


export default defineNuxtPlugin(app => {
  /* http */
  app.vueApp.provide('http', http);
  app.vueApp.provide('generalHttpHandle', generalHttpHandle);

  /* authentication */
  const token = ""; ///useToken()
  const user = ""; //useUser();

  app.vueApp.provide('token', token);
  app.vueApp.provide('user', user);

});
