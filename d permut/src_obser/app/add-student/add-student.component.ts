import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student' ;
import { StudentService } from '../shared/services/student.service' ;
import { AngularFirestore } from '@angular/fire/firestore' ;
import { RouterModule , Routes } from '@angular/router';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable, Subscription}  from 'rxjs';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public student = new Student();
  validation:boolean;


  constructor ( private studentService : StudentService,private route: ActivatedRoute,private router:Router ) { }

  ngOnInit(): void{

    let id=this.route.snapshot.queryParams['id'];
    if (id!=null)
    { 
      this.getStudent(id);
      let isValider:Observable<{IsUpdate:false}>;

      isValider=Observable.create((observer)=>{
      if (this.validation===true){observer.next(true);}
      else{observer.next(false);}

      this.router.navigate(['/all-students']);
    }

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
  valider(){
    this.validation= true ;
  }

}
