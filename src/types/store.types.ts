import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Store types
export type RootState = ReturnType<typeof import('../Store/store').default.getState>;
export type AppDispatch = typeof import('../Store/store').default.dispatch;

// Redux hooks types
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 