import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class AuthService {
  loginUrl = "http://localhost:5000/api/";
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}
  login(data): Observable<any> {
    return this.http.post(`${this.loginUrl}Accounts/login`, data);
  }
  signup(data) {
    return this.http.post(`${this.loginUrl}Accounts`, data);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
