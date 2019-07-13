import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { DashboardService } from "src/app/dashboard/dashboard.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}
  login() {
    this.auth
      .login({ username: this.username, password: this.password })
      .subscribe(result => {
        if (result.success) {
          localStorage.setItem("token", result.token);
          this.router.navigate(["/dashboard"]);
        } else {
          this.auth.openSnackBar(result.message, "ok");
        }
      });
  }
  navigate() {
    this.router.navigate(["/signup"]);
  }
}
