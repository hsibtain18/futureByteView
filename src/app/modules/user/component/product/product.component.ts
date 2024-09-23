import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  dataService = inject(DataService);
  productForm!: FormGroup;
  categoryList = this.dataService.CategoryList;
  ngOnInit(): void {
    this.productForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Category: new FormControl('2', [Validators.required]),
      qty: new FormControl('3', [Validators.required]),
      Id: new FormControl(0, [Validators.required]),
      Price: new FormControl('20', [Validators.required]),
    });
  }
  addProduct() {
    if(this.productForm.valid){
      this.dataService.addProduct(this.productForm.value)
    }
  }
}
