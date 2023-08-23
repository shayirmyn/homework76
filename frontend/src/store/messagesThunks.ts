import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IMessage, IStateMessage} from "../types";

export const addMessage = createAsyncThunk(
    "post/fetch",
    async (data: IStateMessage) => {
        await axiosApi.post("/messages", data);
    },
);

export const getMessages = createAsyncThunk<IMessage[], undefined>(
    "getAll/fetch",
    async () => {
        const messages = await axiosApi<IMessage[]>("/messages");
        return messages.data;
    },
);

export const getNewMessage = createAsyncThunk<IMessage | null, string>(
    "getNew/fetch",
    async (lastDate) => {
        const newMessage = await axiosApi<IMessage | null>(`/messages?datetime=${lastDate}`)
        if (newMessage.data) {
            return newMessage.data;
        }
        return null;
    },
);