import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-edit-employees',
  templateUrl: './add-edit-employees.component.html',
  styleUrls: ['./add-edit-employees.component.css']
})
export class AddEditEmployeesComponent implements OnInit {
  form: FormGroup;
  isEditMode = false;
  employeeId: number;
  employeeData: Employee;

  constructor(private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private location: Location,
    private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      this.employeeId = params.id
    });
    if (this.router.getCurrentNavigation().extras.state) {
      this.employeeData = this.router.getCurrentNavigation().extras.state.data;
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(4)]],
      'phone': ['', [Validators.required, Validators.pattern('[0-9]+')]],
      'city': [''],
      'address1': [''],
      'address2': [''],
      'postal_code': [''],
    });
    // To handle reload [Edit page only]
    if (!this.employeeData) {
      if (this.router.url === '/employees/edit/' + this.employeeId) {
        this.employeeService.getEmployeeById(this.employeeId).subscribe(response => {
          this.employeeData = response;
          this.bindEmployeeData(this.employeeData)
        })
      }
    } else {
      this.bindEmployeeData(this.employeeData)
    }

  }
  bindEmployeeData(employeData) {
    this.form.controls['name'].setValue(employeData.name);
    this.form.controls['phone'].setValue(employeData.phone)
    this.form.controls['city'].setValue(employeData.address.city)
    this.form.controls['address1'].setValue(employeData.address.address_line1)
    this.form.controls['address2'].setValue(employeData.address.address_line2)
    this.form.controls['postal_code'].setValue(employeData.address.postal_code)

  }
  onSubmit(data) {
    const employee = {
      "name": data.name,
      "phone": data.phone,
      "address": {
        "city": data.city,
        "address_line1": data.address1,
        "address_line2": data.address2,
        "postal_code": data.postal_code
      }
    }
    if (this.employeeData) {
      this.employeeId = this.employeeData.id;
      this.employeeService.editEmployee(employee, this.employeeId).subscribe(response => {
        this.openSnackBar(response.message, '')
      })
      this.location.back();
    } else {
      this.employeeService.addEmployee(employee).subscribe(response => {
        this.openSnackBar(response.message, '')
      })
      this.location.back();
    }

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
