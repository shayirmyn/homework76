import { createSlice } from '@reduxjs/toolkit';
import {addMessage} from "./messagesThunk";


interface MessagesState {
    addLoading: boolean;
}

const initialState: MessagesState = {
    addLoading: false,
}

export const MessagesSlice = createSlice({
    name: 'messages',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addMessage.pending, (state) => {
            state.addLoading = true;
        });
        builder.addCase(addMessage.fulfilled, (state) => {
            state.addLoading = false;
        });
        builder.addCase(addMessage.rejected, (state) => {
            state.addLoading = false;
        });
    }});

export const messagesReducer = MessagesSlice.reducer;
