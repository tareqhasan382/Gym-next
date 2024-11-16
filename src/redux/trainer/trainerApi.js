import baseApi from "../api/baseApi";

export const trainerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    trainers: build.query({
      query: () => ({
        url: "/trainer/all",
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

export const { useTrainersQuery, useCreateMutation } = trainerApi;
