import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, Sort } from '@angular/material'
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employeesData: Employee[];
  public displayedColumns: string[];
  public dataSource;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employeesData = data;
      this.displayedColumns = ['id', 'name', 'phone', 'city', 'address_line1', 'address_line2', 'postal_code', 'action'];
      this.dataSource = new MatTableDataSource(this.employeesData);
      // Filter for Name and City
      this.dataSource.filterPredicate = (data: Employee, filter) => {
        const dataStr = data.name + data.address.city;
        return dataStr.toLowerCase().indexOf(filter) != -1;
      }
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
    this.router.navigate(['/employees/add'])
  }

  redirectToEdit(rowData) {
    //Saving data to avoid API call while loading edit page
    this.router.navigate(["/employees/edit", rowData.id], {
      state: {
        data: rowData
      }
    });
  }

  ngOnDestroy() {

  }

  isPhoneNumber(data) {
    const pattern = /^[0-9]+$/;
    if (data.match(pattern)) {
      return data
    } else {
      return 'NA'
    }
  }
}
