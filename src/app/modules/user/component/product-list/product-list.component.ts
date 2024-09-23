import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  length = 0;
  originalData = [];
  filteredData: any;
  dataService = inject(DataService);
  page = 1;
  ngOnInit(): void {
    this.dataService.DataProductList.subscribe((val: any) => {
      if (val?.length) {
        this.length = val.length;
        if (this.length <= 10) {
          this.filteredData = val;
        } else {
          this.filteredData = val.slice(0, 10);
        }
        this.page = 1
        this.originalData = Object.assign([], val);
      }
    });
  }
  paginate(paginationNumber: any) {
    const perPage = 10;
    const totalItems = this.originalData.length;
  
    if (paginationNumber > 0 && paginationNumber <= Math.ceil(totalItems / perPage)) {
      const startIndex = (paginationNumber - 1) * perPage;
      const endIndex = startIndex + perPage;
      
      // Slice the data based on the calculated indexes
      this.filteredData = this.originalData.slice(startIndex, endIndex);
    }
  }
  delete(ID:  number){
     const itemIndex = this.originalData.findIndex((val: any)=> val.Id == ID)
     this.originalData.splice(itemIndex,1)
     this.dataService.DataProductList.next(this.originalData)
  }
  edit(product: any){
this.dataService.EditProduct.next(product)
  }
}
