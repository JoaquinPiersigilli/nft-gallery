import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getETHBalance } from "../handlers/web3Handler";
import { AsyncState } from "AppEntryConfig/reduxStore";

interface balanceState extends AsyncState {
  balance: string;
}

const initialState: balanceState = {
  balance: "",
  isLoading: true,
  isSuccess: false,
  isError: false,
};

export const balanceThunk = createAsyncThunk(
  "balance/load",
  async (_, thunkAPI) => {
    try {
      return await getETHBalance();
    } catch (error) {
      return thunkAPI.rejectWithValue("Couldn't fetch assets");
    }
  }
);

export const balanceSlice = createSlice({
  name: "ethBalance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(balanceThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(balanceThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.balance = action.payload;
      })
      .addCase(balanceThunk.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.balance = "?";
      });
  },
});
