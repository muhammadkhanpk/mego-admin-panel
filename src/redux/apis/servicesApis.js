import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../Services/Utils";
export const servicesApis = createApi({
  reducerPath: "servicesApis",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(`Authorization`, `Bearer ${getToken()}`);
    },
  }),
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => "/services/allServices",
    }),
  }),
});
export const { useGetAllServicesQuery } = servicesApis;
