import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetL, SetL } from "../../Helpers/LocalStateManager";
import axios from "axios";
const user = GetL("user") ? GetL("user") : {}
export const FindPost = createAsyncThunk("posts", async () => {
    const posts = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return posts.data
})
const InitialState = {
    user: user,
    posts:[]
}

const UserSlice = createSlice({
    name: "user",
    initialState: InitialState,
    extraReducers: (builder) => {
        builder.addCase(FindPost.fulfilled, (state, action) => {
            state.posts=action.payload
        })
    },
    reducers: {
        TakeUser: (state, action) => {
            state.user = action.payload
            SetL("user",action.payload)
        }
    }
})

export const {TakeUser } = UserSlice.actions
export default UserSlice