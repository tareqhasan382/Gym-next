import { baseApi } from "../api/baseApi";
import { jwtDecode } from "jwt-decode";
import { userLoggedIn } from "./authSlice";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/user/registration",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          //  console.log("result:", result.data.data);
          const user = jwtDecode(result?.data?.data?.accessToken);
          // console.log("user:", user);
          dispatch(
            userLoggedIn({
              accessToken: result?.data?.data?.accessToken,
              user: user,
            })
          );
        } catch (err) {
          console.log("something went to wrong", err);
          // do nothing
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
