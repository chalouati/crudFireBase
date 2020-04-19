import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Student } from '../shared/models/student' ;
import { StudentService } from '../shared/services/student.service' ;
import { AngularFirestore } from '@angular/fire/firestore' ;
import { RouterModule, Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Observable, Subscription}  from 'rxjs';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @ViewChild('addForm',{static:false}) 
  adForm: NgForm;

  public student = new Student(); 
 
  constructor ( private studentService : StudentService, private route: ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void{

    let id=this.route.snapshot.queryParams['id'];
    if (id) {this.getStudent(id);

    }

  }
 
  save () {
    if (!this.student.id) {
      this.studentService.AddStudent({ ... this.student}).then((res) => {
        this.adForm.resetForm();
        
        })
    } else {
    this.studentService.updateStudent(this.student);
    }
    this.router.navigate(['/all-students']);
    }

  getStudent (id:string) {
    this.studentService.getStudent(id).subscribe(res => {
                                                            this.student = res.data() as Student ;
                                                           this.student.id = res.id ;
                                                          });
                                                        }

}
