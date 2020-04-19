import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student' ;
import { StudentService } from '../shared/services/student.service' ;
import { AngularFirestore } from '@angular/fire/firestore' ;
import { RouterModule , Routes } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public student = new Student();

  constructor ( private studentService : StudentService,private route: ActivatedRoute ) { }

  ngOnInit(): void{

    let id=this.route.snapshot.queryParams['id'];
    if (id!=null)
    {this.getStudent(id);
    }

  }
  save(){
  //debugger;
  //console.log(this.student);  
  this.studentService.AddStudent({ ... this.student });
  }

  getStudent (id) {
    this.studentService.getStudent(id).subscribe ( res => {
                                                            this.student = res.data () as Student ;
                                                           this.student.id = res.id ;
                                                          });
  }

}
