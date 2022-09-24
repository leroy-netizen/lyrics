import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MdHeadphonesBattery } from "react-icons/md";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "59f558abffmshd1f0e5155624e48p11548ajsncb21a25138bb"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
