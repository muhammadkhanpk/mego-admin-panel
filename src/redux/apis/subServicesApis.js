import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../Services/Utils";
export const subServicesApis = createApi({
  reducerPath: "subServicesApis",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(`Authorization`, `Bearer ${getToken()}`);
    },
  }),
  endpoints: (builder) => ({
    getAllSubServices: builder.query({
      query: (serviceId) => "/services/allSubServices/" + serviceId,
    }),
  }),
});
export const { useGetAllSubServicesQuery } = subServicesApis;
