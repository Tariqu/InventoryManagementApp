import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class DashboardService {
  url = 'http://localhost:5000/api/p/';
  headerOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.url}/products`, this.headerOption);
  }
  addProducts(data): Observable<any> {
    return this.http.post(`${this.url}/products`, data, this.headerOption);
  }
  updateProduct(id, data): Observable<any> {
    return this.http.patch(
      `${this.url}products/${id}`,
      data,
      this.headerOption
    );
  }
  deleteProduct(id): Observable<any> {
    return this.http.delete(`${this.url}products/${id}`, this.headerOption);
  }
}
