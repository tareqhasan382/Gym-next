import baseApi from "../api/baseApi";

export const trainerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    trainees: build.query({
      query: () => ({
        url: "/trainee/all",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    create: build.mutation({
      query: (data) => ({
        url: "/trainer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useTraineesQuery, useCreateMutation } = trainerApi;
