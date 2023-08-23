import { createSlice } from '@reduxjs/toolkit';
import {addMessage, getMessages, getNewMessage} from "./messagesThunks";
import {IMessage} from "../types";


interface MessagesState {
    newMessage: IMessage | null;
    messages: IMessage[];
    getLoading: boolean;
    addLoading: boolean;
}

const initialState: MessagesState = {
    newMessage: null,
    messages: [],
    getLoading: false,
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
        builder.addCase(getMessages.pending, (state) => {
            state.getLoading = true;
        });
        builder.addCase(getMessages.fulfilled, (state, {payload}) => {
            state.getLoading = false;
            state.messages = payload;
        });
        builder.addCase(getMessages.rejected, (state) => {
            state.getLoading = false;
        });
        builder.addCase(getNewMessage.pending, (state) => {
            state.getLoading = true;
        });
        builder.addCase(getNewMessage.fulfilled, (state, {payload}) => {
            state.getLoading = false;
            state.newMessage = payload;
        });
        builder.addCase(getNewMessage.rejected, (state) => {
            state.getLoading = false;
        });
    }});

export const messagesReducer = MessagesSlice.reducer;
