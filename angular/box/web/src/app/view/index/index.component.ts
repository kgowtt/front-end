import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [
    './index.component.less',
  ]
})
export class IndexComponent implements OnInit {

  constructor() {
    this.getData();
  }

  ngOnInit() {
  }
  async getData(){
    let httpUrl ='http://localhost:8080/api/index/quote'
    let result = await axios.get(httpUrl);
    console.log(result.data)
  }

  Images = ['../../assets/owl/202020301_001.jpg','../../assets/owl/202020301_001.jpg','../../assets/owl/202020301_001.jpg'];  
  
  SlideOptions = { 
    items: 1, 
    dots: true, 
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  };  
  
}



