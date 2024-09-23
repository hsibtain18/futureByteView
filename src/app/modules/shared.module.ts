import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const importArray = [
    ReactiveFormsModule
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
