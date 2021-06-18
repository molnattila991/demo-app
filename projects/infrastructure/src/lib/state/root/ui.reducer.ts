import { createReducer, on } from "@ngrx/store";
import { AppUiState } from "projects/core/src/public-api";
import { closeSideNav, openSideNav } from "./ui.actions";

const load = () => {
    return <AppUiState>{
        opened: true
    };
};

export const initialState: Readonly<AppUiState> = load()

const _uiReducer = createReducer(
    initialState,
    on(openSideNav, (state) => ({ ...state, opened: true })),
    on(closeSideNav, (state) => ({ ...state, opened: false }))
)

export function uiReducer(state: any, action: any) {
    return _uiReducer(state, action);
}