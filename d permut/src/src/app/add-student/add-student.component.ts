import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student' ;
import { StudentService } from '../shared/services/student.service' ;
import { AngularFirestore } from '@angular/fire/firestore' ;
import { RouterModule} from '@angular/router';
import {Router,ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public student = new Student();
  formAdd: NgForm;
  constructor ( private studentService : StudentService,private route: ActivatedRoute) { }

  ngOnInit(): void{

    debugger;
    let id=this.route.snapshot.queryParams['id'];
    console.log(id);
    if (id!=null)
    {this.getStudent(id);
    }

  }
 
  save () {
    if (!this.student.id) {
    this.studentService.AddStudent({ ... this . student }).then(( res )=>{
     this.formAdd.resetForm();
    })
    } else {
    this.studentService.updateStudent ( this . student );
    }
    }

  getStudent (id) {
    this.studentService.getStudent(id).subscribe ( res => {
                                                            this.student = res.data() as Student ;
                                                           this.student.id = res.id ;
                                                          });
  }

}
