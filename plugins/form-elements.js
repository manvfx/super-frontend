
import { registerFormElement } from 'unified-form';

export default defineNuxtPlugin(app => {
    registerFormElement({
        identifier: 'text',
        component: defineAsyncComponent(() =>
            import('../components/form-elements/element-text.vue')
        ),
    });
    registerFormElement({
        identifier: 'select',
        component: defineAsyncComponent(() =>
            import('../components/form-elements/element-select.vue')
        ),
    });
    registerFormElement({
        identifier: 'textarea',
        component: defineAsyncComponent(() =>
            import('../components/form-elements/element-textarea.vue')
        ),
    });
    registerFormElement({
        identifier: 'map',
        component: defineAsyncComponent(() =>
            import('../components/form-elements/element-map.vue')
        ),
    });
    registerFormElement({
        identifier: 'checkbox',
        component: defineAsyncComponent(() =>
            import('../components/form-elements/element-checkbox.vue')
        ),
    });
    registerFormElement({
        identifier: 'checkboxes',
        component: defineAsyncComponent(() =>
            import('../components/form-elements/element-checkboxes.vue')
        ),
    });
    registerFormElement({
        identifier: 'radiobuttons',
        component: defineAsyncComponent(() =>
            import('../components/form-elements/element-radiobuttons.vue')
        ),
    });
    registerFormElement({
        identifier: 'series',
        component: defineAsyncComponent(() =>
            import('../components/form-elements/element-series.vue')
        ),
    });
    registerFormElement({
        identifier: 'file',
        component: defineAsyncComponent(() =>
            import('../components/form-elements/element-file.vue')
        ),
    });
});
