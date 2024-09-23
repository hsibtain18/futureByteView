import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'products',
        component:ProductListComponent
      },
      {
        path:'**',
        redirectTo:'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
