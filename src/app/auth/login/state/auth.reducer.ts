import { createReducer, on } from "@ngrx/store"
import { LOGIN, LOGOUT } from "./auth.actions"



export const initialState = {
    isLoggedIn: false
}

export const authReducer = createReducer(initialState,
    on(LOGIN, (state) => ({ ...state, isLoggedIn: state.isLoggedIn })),
    on(LOGOUT, (state) => ({ ...state, isLoggedIn: false }))
)