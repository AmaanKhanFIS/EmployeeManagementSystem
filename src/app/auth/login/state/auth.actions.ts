import { createAction, props } from "@ngrx/store";

export const LOGIN = createAction('LOGIN',
    props<{ isLoggedIn:boolean}>()
)

export const LOGOUT = createAction('LOGOUT',)