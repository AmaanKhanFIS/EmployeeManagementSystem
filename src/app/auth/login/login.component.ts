import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { LOGIN } from './state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder,private store:Store<{auth:{}}>) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }


  onSubmit() {
    console.log(this.loginForm.value)
    this.store.dispatch(LOGIN({isLoggedIn:true}))
    localStorage.setItem('userType', 'Admin')
    console.log("Logged In")
    this.router.navigateByUrl('/employees/list')
  }
}
