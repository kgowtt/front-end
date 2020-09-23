import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../interface/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url: any = '../../assets/data/employees.json';

  public employees = [];
  constructor(private http: HttpClient) { }


  getEmployees(): Observable<IEmployee[]> {

    // console.log(this.url);
    return this.http.get<IEmployee[]>(this.url);
  }

}
