import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ListEmployeeComponent } from './components/components/list-employee/list-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'employees', component: ListEmployeeComponent},
  { path: 'add', component: AddEmployeeComponent},
  { path: 'updateEmployee/:id', component: AddEmployeeComponent},
  { path: '', redirectTo:'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
