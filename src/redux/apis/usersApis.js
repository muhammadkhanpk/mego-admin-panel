import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../Services/Utils";
export const usersApis = createApi({
  reducerPath: "usersApis",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(`Authorization`, `Bearer ${getToken()}`);
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => "/users/findUser/" + id,
    }),
    getAllUsers: builder.query({
      query: () => "/users/allUsers",
    }),
    updateUser: builder.mutation({
      query: (id, obj) => ({
        url: "/users/updateUser/" + id,
        method: "PUT",
        body: obj,
      }),
    }),
  }),
});
export const { useGetAllUsersQuery, useGetUserQuery, useUpdateUserMutation } =
  usersApis;
