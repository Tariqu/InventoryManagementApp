import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-count",
  templateUrl: "./product-count.component.html",
  styleUrls: ["./product-count.component.css"]
})
export class ProductCountComponent implements OnInit {
  @Input() public productCount;
  constructor() {}

  ngOnInit() {}
}
