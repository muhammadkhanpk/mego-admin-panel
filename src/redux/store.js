import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { servicesApis } from "./apis/servicesApis";
import { sliderApis } from "./apis/slidersApis";
import { subServicesApis } from "./apis/subServicesApis";
import { usersApis } from "./apis/usersApis";
import userSlice from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    [usersApis.reducerPath]: usersApis.reducer,
    [servicesApis.reducerPath]: servicesApis.reducer,
    [subServicesApis.reducerPath]: subServicesApis.reducer,
    [sliderApis.reducerPath]: sliderApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      usersApis.middleware,
      servicesApis.middleware,
      subServicesApis.middleware,
      sliderApis.middleware,
    ]),
});
setupListeners(store.dispatch);
