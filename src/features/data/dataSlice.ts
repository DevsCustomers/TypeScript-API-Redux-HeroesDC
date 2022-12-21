import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DataInstance, simulateFetchAPI } from './dataAPI';

export interface DataState {
    loading: boolean
    data: any
}

const initialState: DataState = {
    loading: false,
    data: []
}

export const fetchDataAsync = createAsyncThunk(
    'data/fetchData',
    async(): Promise<Array<DataInstance>> => {
        const response = await simulateFetchAPI()
        return response 
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataAsync.pending, (state: DataState) => {
            state.loading = true
        })
    },
})