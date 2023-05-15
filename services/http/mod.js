import { makeUnifiedNetwork } from 'unified-network';
import { AppConfig } from '~~/app-config';
// import { logoutUser } from '~/modules/authentication/controller';
// import { useToken, useUser } from '~/modules/authentication/state';
// import { launchButtonPickerDialog } from '~/utilities/unified-dialogs-vuetify/button-picker/mod';
import { runDebounced } from '~/utilities/debounced-runner/debounced-runner';

export const http = makeUnifiedNetwork({
    baseUrl: `${AppConfig.server.baseUrl}/api`,
    headers: {
        'Origin': AppConfig.server.websiteUrl,
    },
    processor: async ({ url, method, body, headers }) => {
        try {
            const response = await $fetch.raw(url, {
                method: method.toUpperCase(),
                body,
                headers,
            });
            return {
                status: response?.status,
                headers: Object.fromEntries(response?.headers.entries() ?? []),
                data: response?._data,
            };
        }
        catch (error) {
            if (!('statusCode' in error)) {
                console.error(error);
            }
            return {
                status: error.statusCode,
                headers: Object.fromEntries(error.response?.headers.entries() ?? []),
                data: error.data,
            };
        }
    }
});

export function generalHttpHandle(status, data, silent) {
    if (status === 423) {
        useRouter().replace({
            name: 'auth.page',
        });

        // logoutUser(useToken(), useUser(), true);

        if (!silent) {
            runDebounced('logout-blocked', 200, () => {
                console.log("logout")
            });
        }
        return true;
    }

    if (status !== 200 && status !== 201) {
        if (!silent) {
            toastError({
                title: data?.error || 'لطفا دوباره تلاش کنید.',
            })
        }
        return true;
    }
}
