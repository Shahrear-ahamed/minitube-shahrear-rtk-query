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
        }),
        getRelatedVideos: build.query({
            query: ({id, title}) => {
                const tags = title.split(" ");
                const likes = tags.map(tag => `title_like=${tag}`);
                return `/videos?${likes.join("&")}&_limit=4`;
            }
        }),
    })
})


export const {useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery} = apiSlice;