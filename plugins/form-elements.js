
import { registerFormElement } from 'unified-form';

export default defineNuxtPlugin(app => {
    registerFormElement({
        identifier: 'text',
        component: defineAsyncComponent(() =>
            import('../components/form-elements/element-text.vue')
        ),
    });
});
