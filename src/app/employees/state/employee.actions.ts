import { createAction, props } from "@ngrx/store";
import { Employee } from "../employee.model";

export const addEmployee = createAction('ADD EMPLOYEE',props<Employee>())
export const removeEmployee = createAction('REMOVE EMPLOYEE',props<{id:number}>())
export const updateEmployee = createAction('UPDATE EMPLOYEE',props<Employee>())