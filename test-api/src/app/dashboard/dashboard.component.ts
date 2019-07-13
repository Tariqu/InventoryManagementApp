import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public productList: [];
  public productCount;
  public _selectedItem = "";
  constructor(
    private dashBoardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductList();
  }
  updateUI(e) {
    this.getProductList();
  }
  getProductList() {
    this.dashBoardService.getProducts().subscribe(res => {
      this.productList = res.data;
      this.productCount = res.data.length;
    });
  }
  selectedItem(e) {
    this._selectedItem = e;
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
}
