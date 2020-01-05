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
      this.displayedColumns = ['id', 'name', 'phone', 'city', 'address_line1', 'address_line2', 'postal_code', 'action'];
      this.dataSource = new MatTableDataSource(this.employeesData);
    })
  }
  sortData(sort: Sort) {
    const data = this.employeesData.slice();
    if (!sort.active || sort.direction === '') {
      this.employeesData = data;
      return;
    }

    this.employeesData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'phone': return this.compare(a.phone, b.phone, isAsc);
        case 'city': return this.compare(a.address.city, b.address.city, isAsc);
        case 'address_line1': return this.compare(a.address.address_line1, b.address.address_line1, isAsc);
        case 'address_line2': return this.compare(a.address.address_line2, b.address.address_line2, isAsc);
        case 'postal_code': return this.compare(a.address.postal_code, b.address.postal_code, isAsc);
        default: return 0;
      }
    });
    this.dataSource = new MatTableDataSource(this.employeesData);
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  redirectoToadd() {
    this.router.navigate(['/add'])
  }

  redirectToEdit(rowData) {
    this.router.navigate(["/edit", rowData.id], {
      state: {
        data: rowData
      }
    });
  }

  ngOnDestroy() {

  }
}
