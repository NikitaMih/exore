import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productApi } from 'src/app/services/ProductService';

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
