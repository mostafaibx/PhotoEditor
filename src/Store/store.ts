import { configureStore } from "@reduxjs/toolkit";
import colorsReducers from "./reducers/inputValuesReducer";
import cropReducers from "./reducers/cropReducers";
import sliderReducers from "./reducers/sliderReducer";
import MenuesReducer from "./reducers/MenuesReducer";

// ...

const store = configureStore({
  reducer: {
    colors: colorsReducers,
    crop: cropReducers,
    slider: sliderReducers,
    menu: MenuesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
