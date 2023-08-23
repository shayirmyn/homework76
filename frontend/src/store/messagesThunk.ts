import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IStateMessage} from "../types";

export const addMessage = createAsyncThunk(
    "post/fetch",
    async (data: IStateMessage) => {
        await axiosApi.post("/messages", data);
    },
);