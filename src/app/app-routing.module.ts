import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SudentRegistrationComponent } from './sudent-registration/sudent-registration.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {
    path:"studentRegistration",
    component:SudentRegistrationComponent
  },
  {
    path:"showStudents",
    component:StudentListComponent
  },
  {
    path:"editStudent",
    component:EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
