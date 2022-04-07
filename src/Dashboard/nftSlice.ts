import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OpenSeaAsset } from "../OpenSeaTypes";
import { getAssetsFromAddress } from "Dashboard";
import { AsyncState } from "AppEntryConfig/reduxStore";

interface nftState extends AsyncState {
  assets: OpenSeaAsset[];
}

const initialState: nftState = {
  assets: [],
  isLoading: true,
  isSuccess: false,
  isError: false,
};

type params = {
  address: string;
  limit: number;
};

export const initThunk = createAsyncThunk(
  "nfts/init",
  async (params: params, thunkAPI) => {
    try {
      return await getAssetsFromAddress(params.address, params.limit);
    } catch (error) {
      return thunkAPI.rejectWithValue("Couldn't fetch assets");
    }
  }
);

export const nftSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(initThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.assets = action.payload.assets;
      })
      .addCase(initThunk.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.assets = [];
      });
  },
});
