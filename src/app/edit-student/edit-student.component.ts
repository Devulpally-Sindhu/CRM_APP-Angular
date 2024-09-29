import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  constructor(public ar:ActivatedRoute,
    public studentService:StudentService
  ){}
  students:any=[];

  studentForm:FormGroup=new FormGroup({
    fullname:new FormControl(),
    phoneNumber:new FormControl(),
    email:new FormControl(),
    course:new FormControl(),
    remarks:new FormControl(),
    id:new FormControl()
  })
  ngOnInit(){
    this.ar.queryParams.subscribe((res)=>{
      this.studentForm.setValue(res)
    })
    this.getAllStudents();

  }
  getAllStudents(){
    this.studentService.getStusents().subscribe((data)=>{
      this.students=data;
    })
   }

  updateStudent(){
    this.studentService.editStudent(this.studentForm.value).subscribe((data)=>{
      this.getAllStudents();
    })

  }

}
