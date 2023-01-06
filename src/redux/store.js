import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { demoApis } from "./apis/demoApis";
import userSlice from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    [demoApis.reducerPath]: demoApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
    getDefaultMiddleware().concat(demoApis.middleware),
});
setupListeners(store.dispatch);
