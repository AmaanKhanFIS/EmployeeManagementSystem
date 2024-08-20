import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { Store } from '@ngrx/store';
import { addEmployee, updateEmployee } from '../state/employee.actions';
import { EmployeeState } from '../state/employee.reducer';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  employeeForm: FormGroup;
  genders: Object[] = ['Male', 'Female'];
  selectedGender: string = 'Male';
  selectedEmployee: Employee | null = null;
  updateId: number = 0;
  buttonText :string = "Add Employee"
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<{ employee: EmployeeState }>
  ) {
    this.activatedRoute.params.subscribe(
      (params: Params) => {this.updateId = params['id']}
    );
    this.updateId ? this.buttonText = 'Update Employee' : this.buttonText = 'Add Employee' ,
    console.log(this.updateId);

    this.employeeForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      dob: [''],
      gender: [''],
      education: [''],
      company: [''],
      experience: [''],
      salary: [''],
    });
    this.selectedEmployee = this.employeeService.getEmployee(this.updateId);
    this.updateId
      ? this.employeeForm.patchValue({
          firstName: this.selectedEmployee.firstName,
          lastName: this.selectedEmployee.lastName,
          email: this.selectedEmployee.email,
          dob: this.selectedEmployee.dob,
          gender: this.selectedEmployee.gender,
          education: this.selectedEmployee.education,
          company: this.selectedEmployee.company,
          experience: this.selectedEmployee.experience,
          salary: this.selectedEmployee.salary,
        })
      : this.employeeForm.patchValue({});
  }

  submit() {
    let employeeList:Employee[] = []
    this.store.select('employee').subscribe(val => { employeeList = val.employees });
    const newId = this.updateId ? this.updateId : employeeList ? +employeeList.slice(-1)[0]['id'] + 1 : 1
    const date =
      new Date(this.employeeForm.value.dob).getDate() +
      '-' +
      new Date(this.employeeForm.value.dob).getMonth() +
      '-' +
      new Date(this.employeeForm.value.dob).getFullYear();

      const newEmployee:Employee = {
        ...this.employeeForm.value,
        id:newId,
        gender:this.selectedGender
      }
    // this.updateId
    //   ? this.employeeService.updateEmployee(this.updateId, {
    //       ...this.employeeForm.value,
    //       dob: date,
    //       gender: this.selectedGender,
    //     })
    //   : this.employeeService.addEmployees({
    //       ...this.employeeForm.value,
    //       dob: date,
    //       gender: this.selectedGender,
    //     });
    this.updateId ? this.store.dispatch(updateEmployee(newEmployee)): this.store.dispatch(addEmployee(newEmployee))
    this.router.navigateByUrl('employees/list');
  }
}
