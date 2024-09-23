import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  loginService = inject(LoginService)
  passwordView = true
  public LoginForm!: FormGroup;
  ngOnInit(): void {
    this.LoginForm = new FormGroup ({
      username: new FormControl('emilys',[Validators.required]),
      password: new FormControl('emilyspass',[Validators.required])
    })
  }
  Navigate() {
    this.router.navigate(['/user']);
  }
  login(){
    if(this.LoginForm.valid){
      this.loginService.Login(this.LoginForm.value)
      .then((val: any)=>{
        if(val?.accessToken){
          this.Navigate()
        }
        
      })
      .catch((err: any)=>{
        console.log(err);
        
      })
    }
  }
}
