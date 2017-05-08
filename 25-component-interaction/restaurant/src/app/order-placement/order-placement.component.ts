import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css']
})
export class OrderPlacementComponent implements OnInit {
  menuItems = [
    'Hamburger',
    'Cheeseburger',
    'Fries',
    'Drink'
  ];

  constructor() { }

  ngOnInit() {
  }

  placeOrder(menuItem) {
    console.log(menuItem);
  }
}
