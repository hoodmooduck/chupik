import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const UserApi = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://random-data-api.com/api/' }),
    endpoints: (build) => ({
        fetchUser: build.query({
            query: ({ page }) => ({
                url: '/v2/users',
                params: {
                    page,
                    size: 5,
                },
            }),
        }),
    }),
});

