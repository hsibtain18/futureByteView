import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product/product.component';
import { SideBarComponent } from './extra/side-bar/side-bar.component';
import { NavBarComponent } from './extra/nav-bar/nav-bar.component';
import { DataService } from './Services/data.service';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductListComponent,
    ProductComponent,
    SideBarComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule

  ],
  providers:[
    DataService
  ]
})
export class UserModule { }
