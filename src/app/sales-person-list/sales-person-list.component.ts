import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects of sales person
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Ajay","Kumar","ajayEgmail.com",100),
    new SalesPerson("Abhay","kumar","abhay@gmail.com",200),
    new SalesPerson("Ruby","yadav","ruby@gmail.com",300),
    new SalesPerson("Akansha","yadav","akansha@gmail.com",400)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
