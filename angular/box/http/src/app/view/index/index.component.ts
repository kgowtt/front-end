import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../service/employee.service';


// import axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [
    './index.component.less',
  ]
})
export class IndexComponent implements OnInit {

  employees = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    // this.employeeService.getEmployees().subscribe( data => this.employees = data );

    this.employeeService.getEmployees().subscribe( (data) => {
      this.employees = data;
      console.log(this.employees );
    });




  }


}



