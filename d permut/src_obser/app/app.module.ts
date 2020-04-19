import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AngularFireModule } from '@angular/fire' ;
import { AngularFireDatabaseModule } from '@angular/fire/database' ;
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { StudentService } from './shared/services/student.service';
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListStudentsComponent } from './list-students/list-students.component';
import {Observable, Subscription}  from 'rxjs';

const routes : Routes = [
  { path:'edit', component: EditComponent},
  { path:'addstudent', component: AddStudentComponent },
   {path:'all-students',component:ListStudentsComponent}
  ];
  @NgModule({
    declarations: [
      AppComponent,
      AddStudentComponent,
      EditComponent,
      ListStudentsComponent
    ],
    imports: [BrowserModule,RouterModule.forRoot(routes),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,AngularFirestoreModule.enablePersistence(),
      FormsModule
    ],
    
    providers: [AngularFireModule,StudentService],
    bootstrap: [AppComponent]
  })

  export class AppModule { }
