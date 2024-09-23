import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product/product.component';
import { SideBarComponent } from './extra/side-bar/side-bar.component';
import { NavBarComponent } from './extra/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductListComponent,
    ProductComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
