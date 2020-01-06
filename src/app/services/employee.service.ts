import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Employee } from '../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public url = 'http://localhost:3001';
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<any>(this.url + '/employees')
      .pipe(
        tap(response => {
          return response;
        }),

      );
  }
  addEmployee(data: Employee): Observable<any>{
    return this.http
      .post<any>(this.url+ '/employees', data)
      .pipe(
        tap(response => {
          return response;
        }),

      );
  }
  editEmployee(data: Employee, id): Observable<any>{
    return this.http
      .post<any>(this.url+ '/employees/'+ id, data)
      .pipe(
        tap(response => {
          return response;
        }),

      );
  }
  getEmployeeById(id): Observable<Employee> {
    return this.http
      .get<any>(this.url + '/employees/' + id)
      .pipe(
        tap(response => {
          return response;
        }),
      );
  }
}
