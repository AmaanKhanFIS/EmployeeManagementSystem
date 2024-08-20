import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LOGOUT } from 'src/app/auth/login/state/auth.actions';
import { EmployeeState } from '../state/employee.reducer';
import { removeEmployee } from '../state/employee.actions';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {

  loginUrl: string = '/login'
  buttonText :string ='Add Employee'
  displayedColumns: string[] = [
    // 'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'salary',
    'action',
  ];


  dataSource!: MatTableDataSource<any>;
  
  constructor( private router: Router, private store: Store<{ employee: EmployeeState }>){
    store.select('employee').subscribe(val => { this.dataSource = new MatTableDataSource(val.employees) });
  }

  openEditForm(id: number) {
    this.router.navigateByUrl('employees/update/' + id)
  }

  deleteEmployee(id: number) {
    this.store.dispatch(removeEmployee({ id }))
  }

  openAddEditEmployeeDialog() {
    this.router.navigateByUrl('employees/create')
  }

  logout() {
    this.store.dispatch(LOGOUT())
    localStorage.clear()
    this.router.navigateByUrl('login')
  }
}

