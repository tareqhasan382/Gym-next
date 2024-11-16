import baseApi from "../api/baseApi";

export const classApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    classes: build.query({
      query: () => ({
        url: "/class",
        method: "GET",
      }),
      providesTags: ["class"],
    }),
    classe: build.mutation({
      query: (data) => ({
        url: "/class/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["class"],
    }),
    bookclass: build.mutation({
      query: (data) => ({
        url: "/class/book-class",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["class", "user"],
    }),
  }),
});

export const { useClassesQuery, useClasseMutation, useBookclassMutation } =
  classApi;
