import { configureStore, Store as ReduxStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useSelector as useSelectorWithoutState } from "react-redux";

export const store: Store = configureStore({
  reducer: rootReducer,
});
export type State = ReturnType<typeof rootReducer>;

export type Dispatch = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (action: any): Promise<void>;
};
export type Store = { dispatch: Dispatch } & ReduxStore<State>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const dispatch = store.dispatch;
export const useSelector = useSelectorWithoutState as <T>(
  selector: (state: State) => T
) => T;
export interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
