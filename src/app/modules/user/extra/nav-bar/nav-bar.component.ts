import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  DataObject: any;
  ngOnInit(): void {
    this.DataObject = JSON.parse(sessionStorage.getItem('Data') || '');
  }
}
