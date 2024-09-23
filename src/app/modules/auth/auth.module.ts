import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { NavBarComponent } from './extra/nav-bar/nav-bar.component';
import { SharedModule } from '../shared.module';
import { HttpClientModule } from '@angular/common/http'; 
import { LoginService } from './Services/login.service';

@NgModule({
  declarations: [
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[
    LoginService
  ]
})
export class AuthModule { }
