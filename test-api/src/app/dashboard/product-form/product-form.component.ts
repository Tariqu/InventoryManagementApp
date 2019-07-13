import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  Input
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() public item;
  @Output() public dataChange = new EventEmitter();
  public pid = null;
  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService
  ) {}
  myForm: FormGroup;
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", [Validators.required]],
      rating: ["", [Validators.required]]
    });
  }
  ngOnChanges() {
    // When form will render it will be blank
    if (this.item != "") {
      this.myForm.patchValue({
        name: this.item.name,
        price: this.item.price,
        rating: this.item.rating
      });
      this.pid = this.item.id;
    }
  }
  addProduct(e) {
    if (this.myForm.valid) {
      this.dashboardService.addProducts(this.myForm.value).subscribe(result => {
        if (result.success) {
          this.dashboardService.openSnackBar(result.message, "ok");
          this.cancelProduct();
          this.dataChange.emit(result);
        }
      });
    } else {
      this.dashboardService.openSnackBar("Please Enter all the field", "ok");
    }
  }
  updateProduct(e) {
    if (this.myForm.valid) {
      this.dashboardService
        .updateProduct(this.pid, this.myForm.value)
        .subscribe(result => {
          if (result.success) {
            this.dashboardService.openSnackBar(result.message, "ok");
            this.cancelProduct();
            this.dataChange.emit(result);
          }
        });
    } else {
      if (!this.pid) {
        this.dashboardService.openSnackBar("Please select the product", "ok");
      } else {
        this.dashboardService.openSnackBar("Please Enter all the field", "ok");
      }
    }
  }
  deleteProduct(e) {
    if (this.myForm.valid) {
      this.dashboardService.deleteProduct(this.pid).subscribe(result => {
        if (result.success) {
          this.dashboardService.openSnackBar(result.message, "ok");
          this.cancelProduct();
          this.dataChange.emit(result);
        }
      });
    } else {
      if (!this.pid) {
        this.dashboardService.openSnackBar("Please select the product", "ok");
      } else {
        this.dashboardService.openSnackBar("Please Enter all the field", "ok");
      }
    }
  }
  cancelProduct() {
    this.myForm.reset();
    this.item = null;
    this.pid = null;
  }
}
