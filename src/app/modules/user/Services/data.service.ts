import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public DataProductList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public CategoryList = [
    { ID: 0, Name: 'Category 1' },
    { ID: 1, Name: 'Category 2' },
    { ID: 2, Name: 'Category 3' },
    { ID: 3, Name: 'Category 4' },
    { ID: 4, Name: 'Category 5' },
    { ID: 5, Name: 'Category 6' },
    { ID: 6, Name: 'Category 7' },
    { ID: 7, Name: 'Category 8' },
    { ID: 8, Name: 'Category 9' },
    { ID: 9, Name: 'Category 10' },
  ];
  lastId: number = 0;
  constructor() {}
  addProduct(newProductData: any): void {
    this.lastId++;
    const currentList = this.DataProductList.getValue() || [];
    const newProduct = {
      Id: this.lastId,
      Name:newProductData.Name+'-'+this.lastId,
      ...newProductData,
    };
    const updatedList = [...currentList, newProduct];
    this.DataProductList.next(updatedList);
  }
}
