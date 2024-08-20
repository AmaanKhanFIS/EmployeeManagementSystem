import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'platform'
})
export class EmployeeService {
  employees:Employee[] =  [
        {
            "id": 1,
            "firstName": "Brinn",
            "lastName": "Jephcote",
            "email": "bjephcote0@archive.org",
            "dob": "1981-10-05T12:09:39Z",
            "gender": "Female",
            "education": "Graduate",
            "company": "Gabspot",
            "experience": 36,
            "salary": 37
        },
        {
            "id": 2,
            "firstName": "Kenneth",
            "lastName": "MacElholm",
            "email": "kmacelholm1@sina.com.cn",
            "dob": "1991-09-12T22:14:02Z",
            "gender": "Male",
            "education": "Matric",
            "company": "Agivu",
            "experience": 75,
            "salary": 17
        }
    ]

  constructor() { }

  getEmployees(){
    console.log("Service called")
    return this.employees;
  }

  deleteEmployee(id:number){
    this.employees = this.employees.filter((item)=>item.id !== id)
  }
  
  addEmployees(employee:Employee){
    // console.log('-------',+this.employees.slice(-1)[0]['id'] + 1) 
    this.employees.push({...employee , id:+this.employees.slice(-1)[0]['id'] + 1})
  }
  
  getEmployee(id:number){
    return this.employees.filter((item)=>item.id == id)[0];
  }
  
  updateEmployee(id:number,employee:Employee){
    this.employees = this.employees.filter((item)=>item.id !== id)
    // this.employees.push({...employee , id:id});
  }
  // return this.employees.filter((item)=>item.id == id)
}
