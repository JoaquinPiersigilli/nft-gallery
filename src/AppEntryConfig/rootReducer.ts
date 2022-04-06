
import {
  combineReducers,
  createSlice,
  Slice,
} from '@reduxjs/toolkit'

const initialState = {}

const nftState: Slice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {},
})

export const rootReducer = combineReducers({
  nfts: nftState.reducer
})