import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, Sort } from '@angular/material'
import { Router } from '@angular/router';
import { Employees } from 'src/app/interfaces';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employeesData: Employees[];
  public displayedColumns: string[];
  public dataSource;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employeesData = data;
      this.displayedColumns = ['id', 'name', 'phone', 'city', 'address_line1', 'address_line2', 'postal_code'];
      this.dataSource = new MatTableDataSource(this.employeesData);
    })
  }
  
  ngOnDestroy() {

  }
}
