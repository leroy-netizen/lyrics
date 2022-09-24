import { shazamCoreApi } from "./api/shazamCore";
import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(shazamCoreApi.middleware),
});
