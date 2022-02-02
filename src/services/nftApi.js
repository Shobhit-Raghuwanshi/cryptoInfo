import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const nftApiHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_NFT_API_HEADER_HOST,
    'x-rapidapi-key': process.env.REACT_APP_NFT_API_HEADER_KEY
}
const baseUrl = process.env.REACT_APP_NFT_API_BASE_URL;

const createRequest = (url) => ({params: {chain: 'eth', filter: 'name', offset: '0', q: 'ape'},url,headers: nftApiHeaders });


export const nftApi = createApi({
  reducerPath: 'nftApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNfts: builder.query({
      query: () => createRequest(`/search`),
    }),

  }),
});

export const {
    useGetNftsQuery,

  } = nftApi;


