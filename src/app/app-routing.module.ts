import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {
    path: '', redirectTo:'Dashboard', pathMatch:'full'
  },
  {
    path: 'Dashboard', component: DashboardComponent 
  },
  {
    path: 'Courses', component: CoursesComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
