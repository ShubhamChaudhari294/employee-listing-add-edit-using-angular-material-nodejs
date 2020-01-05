import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Employees } from '../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public url = 'http://localhost:3001';
  public headers = new HttpHeaders({
    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  public options = { headers: this.headers };
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employees[]> {
    return this.http
      .get<any>(this.url + '/employees')
      .pipe(
        tap(response => {
          return response;
        }),

      );
  }
  addEmployee(data: Employees){
    return this.http
      .post<any>(this.url+ '/employees', data)
      .pipe(
        tap(response => {
          return response;
        }),

      );
  }
  editEmployee(data: Employees, id){
    return this.http
      .post<any>(this.url+ '/employees/'+ id, data)
      .pipe(
        tap(response => {
          return response;
        }),

      );
  }
}
