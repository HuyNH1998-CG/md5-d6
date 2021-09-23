import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm!: FormGroup;

  message:string = '';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  get form(){
    return this.loginForm.controls;
  }

  submit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      this.message = "Login Failed"
      return
    }
    this.message = "Login Success"
    return
  }
}
