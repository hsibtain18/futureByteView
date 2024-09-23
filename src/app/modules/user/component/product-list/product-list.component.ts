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
  filteredData : any;
  dataService = inject(DataService);

  ngOnInit(): void {
    this.dataService.DataProductList.subscribe((val: any) => {
    if(val?.length){
      this.length = val.length
      this.filteredData = val
      this.originalData = Object.assign({},val)
    }
    });
  }
}
