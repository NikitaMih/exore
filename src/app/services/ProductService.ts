import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductResponse } from 'src/shared/models/IProduct';

export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  tagTypes: ['Post', 'Put'],
  endpoints: builder => ({
    getAllProducts: builder.query<IProductResponse, { count: number; sort: string }>({
      query: ({ count, sort }) => ({
        url: '/products',
        params: {
          limit: count,
          sortBy: sort ? 'title' : '',
          order: sort || '',
        },
      }),
      providesTags: ['Post'],
    }),
    getProductsBySearch: builder.query<IProductResponse, number>({
      query: title => ({
        url: '/products/search',
        params: {
          q: title,
        },
      }),
      providesTags: ['Post'],
    }),
    /* eslint-disable @typescript-eslint/no-explicit-any */
    getProductById: builder.query<IProduct, any>({
      query: id => ({
        url: `/products/${id}`,
      }),
      providesTags: ['Put'],
    }),
    createProduct: builder.mutation({
      query: product => ({
        url: `/products/add`,
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Post'],
    }),
    editProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Put'],
    }),
  }),
});
