import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { AddEditEmployeesComponent } from './add-edit-employees/add-edit-employees.component';
const routes: Routes = [
      {path: "", component: EmployeesComponent, },
      { path: 'employees/add', component: AddEditEmployeesComponent },
      { path: 'employees/edit/:id', component: AddEditEmployeesComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
