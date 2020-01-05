import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
const routes: Routes = [
  {
    path: "employees", component: EmployeesComponent, loadChildren: () => import(`./components/employees/employee.module`).then(m => m.EmployeeModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
