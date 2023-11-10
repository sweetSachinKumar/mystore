const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query/react");


const authApi = createApi({
    reducerPath:"user",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/auth/'
    }),
    endpoints:(builder) => ({
        getAllUser: builder.query({
            query:(id)=> `/getAllUser?page=${id}`,
            providesTags:["users"]
        })
    })
})

export const {useGetAllUserQuery } = authApi

export default authApi