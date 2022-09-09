import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000"
    }),
    tagTypes: ["Videos", "Video", "RelatedVideos"],
    endpoints: (build) => ({
        getVideos: build.query({
            query: () => "/videos",
            providesTags: ["Videos"],
            keepUnusedDataFor: 60
        }),
        getVideo: build.query({
            query: (videoId) => `/videos/${videoId}`,
            providesTags: (result, error, arg) => [{type: "Video", id: arg}]
        }),
        getRelatedVideos: build.query({
            query: ({id, title}) => {
                const tags = title.split(" ");
                const likes = tags.map(tag => `title_like=${tag}`);
                return `/videos?${likes.join("&")}&_limit=4`;
            },
            providesTags: (result, error, arg) => [{type: "RelatedVideos", id: arg.id}]
        }),
        addVideo: build.mutation({
            query: (data) => ({
                url: "/videos",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Videos"]
        }),
        editVideo: build.mutation({
            query: ({id, data}) => ({
                url: `/videos/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: (result, error, arg) => [
                "Videos",
                {type: "Video", id: arg.id},
                {type: "RelatedVideos", id: arg.id}
            ]
        }),
    })
})


export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetRelatedVideosQuery,
    useAddVideoMutation,
    useEditVideoMutation
} = apiSlice;