import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

export interface Response {
  success;
  message;
  token;
}

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  username = "";
  email = "";
  password = "";
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  signupProcess() {
    if (this.username === "") {
      this.authService.openSnackBar("Please Enter Username...", "ok");
    } else if (this.email === "") {
      this.authService.openSnackBar("Please Enter Email...", "ok");
    } else if (this.password === "") {
      this.authService.openSnackBar("Please Enter Password...", "ok");
    } else {
      const formValue = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.authService.signup(formValue).subscribe((result: any) => {
        if (result.success) {
          this.navigate();
        } else {
          this.authService.openSnackBar(result.message, "ok");
        }
      });
    }
  }
  navigate() {
    this.router.navigate(["/login"]);
  }
}
