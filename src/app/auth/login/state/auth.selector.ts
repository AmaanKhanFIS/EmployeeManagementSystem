import { createSelector } from "@ngrx/store";
import { EmployeeState } from "src/app/employees/state/employee.reducer";

export interface AuthState {
    isLoggedIn:boolean
}

export interface AppState{
    auth:AuthState,
    employees:EmployeeState
}

export const selectAuth = (state:AppState) => state.auth;

export const loggedInSelector = createSelector(
    selectAuth,
    (state:AuthState) => state.isLoggedIn
)