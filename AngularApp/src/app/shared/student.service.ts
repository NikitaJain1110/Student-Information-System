import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Student } from './student.model';

@Injectable()
export class StudentService {
  selectedStudent: Student;
  students: Student[];
  readonly baseURL = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  postStudent(st: Student) {
    return this.http.post(this.baseURL, st);
  }

  getStudentList() {
    return this.http.get(this.baseURL);
  }

  putStudent(st: Student) {
    return this.http.put(this.baseURL + `/${st._id}`, st);
  }

  deleteStudent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  checkLogin(){
    return this.http.get(this.baseURL+`/login`)
  }

}
