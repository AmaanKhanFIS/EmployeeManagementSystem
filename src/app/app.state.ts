import { AuthState } from "./auth/login/state/auth.selector";
import { EmployeeState } from "./employees/state/employee.reducer";

export interface AppState{
    auth:AuthState,
    employees:EmployeeState
}