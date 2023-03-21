import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*
  CreateApi Slice with createApi(),
  It bundles all queries into one API, which is used to run the Query and get the output result.
  baseQuery: Fetches the Base Query from .env.local, client side env file
  reducerPath: name of the slice
  tagTypes: Represents the schema of the particular Data
  endpoints: Consists of all the query
*/

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "FoodApi",
  tagTypes: ["FoodItems"],
  endpoints: (build) => ({
    // getUser is just a Hook (key)
    getFoodItems: build.query({
      query: () => "cafe/menu",
      providesTags: ["FoodItems"],
    }),
  }),
});

/* 
The value below comes from endpoints:
prefix: use
suffix: Query
so useGetUserQuery
*/
export const { useGetFoodItemsQuery } = api;
