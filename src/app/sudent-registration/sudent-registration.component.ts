import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-sudent-registration',
  templateUrl: './sudent-registration.component.html',
  styleUrl: './sudent-registration.component.css'
})
export class SudentRegistrationComponent {
  constructor(public studentService:StudentService){}

  studentForm:FormGroup=new FormGroup({
    fullname:new FormControl(),
    phoneNumber:new FormControl(),
    email:new FormControl(),
    course:new FormControl(),
    remarks:new FormControl()
  })

  addStudent(){
    this.studentService.addStudent(this.studentForm.value).subscribe((data)=>{
      console.log("inside",data)
    })
  }

}
