import { createSelector } from "@ngrx/store";
import { EmployeeState } from "./employee.reducer";



export interface AppState{
    employee : EmployeeState
}

export const selectApp = (state:AppState) => state.employee;

export const selectEmployees = createSelector(
    selectApp,
    (employee) => employee.employees
)

// (state:EmployeeState) => state.employees

