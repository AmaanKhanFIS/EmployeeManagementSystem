import { createReducer, on, union } from '@ngrx/store';
import { Employee } from '../employee.model';
import { addEmployee, removeEmployee, updateEmployee } from './employee.actions';

export interface EmployeeState {
  employees: Employee[];
}

export const initialState: EmployeeState = {
  employees: [
    {
      id: 1,
      firstName: 'Amaan ',
      lastName: 'Khan',
      email: 'newmail@gmail.com',
      dob: '1981-10-05T12:09:39Z',
      gender: 'Male',
      education: 'Post Graduate',
      company: 'FIS Global',
      experience: 2,
      salary: 72000,
    },
    {
      id: 2,
      firstName: 'Kenneth',
      lastName: 'MacElholm',
      email: 'kmacelholm1@sina.com.cn',
      dob: '1991-09-12T22:14:02Z',
      gender: 'Male',
      education: 'Matric',
      company: 'Agivu',
      experience: 75,
      salary: 17,
    },
  ],
};

export const employeeReducer = createReducer(
  initialState,
  on(addEmployee, (state, action) => ({
    ...state,
    employees: [action, ...state.employees],
  })),
  on(removeEmployee, (state, action) => ({
    ...state,
    employees: state.employees.filter((obj) => obj.id != action.id),
  })),
  on(updateEmployee, (state, action) => { 
    let updatedList = state.employees.filter((obj) => obj.id != action.id) 
    updatedList.push(action)
    return {
    ...state,
    employees: updatedList,
  }})
);
