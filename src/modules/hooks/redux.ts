import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/store.ts";
import {RootState} from "../store/store.ts";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;