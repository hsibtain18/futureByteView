import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const importArray = [
    ReactiveFormsModule,
    HttpClientModule,

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...importArray
  ],
  exports:[
    ...importArray
  ]
})
export class SharedModule { }
