import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000"
    }),
    endpoints: (build) => ({
        getVideos: build.query({
            query: () => "/videos"
        }),
        getVideo: build.query({
            query: (videoId) => `/videos/${videoId}`
        })
    })
})


export const {useGetVideosQuery, useGetVideoQuery} = apiSlice;