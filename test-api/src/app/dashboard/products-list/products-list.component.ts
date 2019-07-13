import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() public listData;
  @Output() public Item = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  selectedItem(data) {
    this.Item.emit(data);
  }
}
