import { combineReducers } from "@reduxjs/toolkit";
import { nftSlice } from "Dashboard/nftSlice";
import { balanceSlice } from "SharedComponents/slices/balanceSlice";

export const rootReducer = combineReducers({
  nfts: nftSlice.reducer,
  ethBalance: balanceSlice.reducer,
});
