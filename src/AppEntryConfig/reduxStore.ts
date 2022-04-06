import {
  configureStore,
  Store,
} from '@reduxjs/toolkit'
import { rootReducer } from "./rootReducer"


const store: Store = configureStore({
  reducer: rootReducer
})

export default store