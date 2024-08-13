import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  tagTypes: ['Post', 'Put'],
  endpoints: builder => ({
    getAllProducts: builder.query({
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
    getProductsBySearch: builder.query({
      query: title => ({
        url: '/products/search',
        params: {
          q: title,
        },
      }),
      providesTags: ['Post'],
    }),
    getProductById: builder.query({
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
