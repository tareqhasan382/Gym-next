import baseApi from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    users: build.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useUsersQuery } = userApi;
