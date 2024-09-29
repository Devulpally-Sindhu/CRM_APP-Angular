import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  constructor(
    public studentService:StudentService,
    public router:Router

  ){}
  students:any=[];

 ngOnInit(){
  this.getAllStudents()
 }

 getAllStudents(){
  this.studentService.getStusents().subscribe((data)=>{
    this.students=data;
  })
 }

 deleteStudent(id:number){
  this.studentService.deleteStudent(id).subscribe(()=>{
    this.getAllStudents();
  })
 }

 editStudent(student:any){
  this.router.navigate(['/editStudent'],{queryParams:student})
 }

 updateStudent(student:any){
  
 }

}
