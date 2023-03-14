import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../Services/Utils";
export const sliderApis = createApi({
  reducerPath: "sliderApis",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(`Authorization`, `Bearer ${getToken()}`);
    },
  }),
  endpoints: (builder) => ({
    getSlider: builder.query({
      query: (id) => "/sliders/findSlider/" + id,
    }),
    getAllSliders: builder.query({
      query: () => "/sliders/allSliders",
    }),
    deleteSlider: builder.mutation({
      query: (id) => ({
        url: `/sliders/deleteSlider/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetAllSlidersQuery,
  useGetSliderQuery,
  useDeleteSliderMutation,
} = sliderApis;
