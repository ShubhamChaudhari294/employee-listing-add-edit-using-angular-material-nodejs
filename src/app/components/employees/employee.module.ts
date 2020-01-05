import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    EmployeesComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    SharedModule
  ],
  providers: [

  ],
})
export class EmployeeModule { }
